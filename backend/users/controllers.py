from litestar import Controller, post, get, Request
from litestar.response import Redirect, Response
from litestar.datastructures import Cookie
from litestar.params import Parameter
from urllib.parse import urlencode
from typing import Any, Annotated
import json

from users.schema import UserDTO
from users.tables import User, AuthTokens
from settings import GOOGLE_CLIENT_ID, GOOGLE_OAUTH_START_URL, GOOGLE_REDIRECT_URI, ACCESS_TOKEN_LIFETIME, REFRESH_TOKEN_LIFETIME
from users.security import generate_secret_token, generate_code_challenge, exchange_code_for_tokens, decode_google_id_token, create_access_token, create_refresh_token, serialize_datetime_fields

class UserController(Controller):
    path = '/accounts'

    @get('/google/callback')
    async def google_callback(
        self, 
        request:Request[Any, Any, Any],
        code: str,
        oauth_state: Annotated[str|None, Parameter(query='state', required=False)]
        )->None:
        oauth_verifier_cookie = request.cookies.get('oauth_verifier')
        file_store = request.app.stores.get('file_store')
        data = await file_store.get(oauth_verifier_cookie)
        data_dict = json.loads(data)
        if (state:= data_dict.get('state')) and state != oauth_state:
            #csrf token is tampered.
            return
        response_data = await exchange_code_for_tokens(code, data_dict.get('code_verifier'))
        #Delete the cookie, that we set for oauth verifier.
        try:
            request.cookies.pop('oauth_verifier')
        except KeyError:
            pass
        #then delete that particular item from the filestore.
        file_store.delete(oauth_verifier_cookie)
        id_token = response_data['id_token']
        access_token = response_data['access_token']
        refresh_token = response_data['refresh_token']
        token_data = decode_google_id_token(id_token)
        user = await User.objects().get(User.sub == token_data.get('sub'))
        if user:
            await user.update_self({
                User.email: token_data.get('email'),
                User.name: token_data.get('name'),
                User.first_name: token_data.get('given_name'),
                User.last_name: token_data.get('family_name'),
                User.picture: token_data.get('picture')
            })
        else:
            user = User(
                sub=token_data.get('sub'), 
                email=token_data.get('email'), 
                name=token_data.get('name'),
                first_name=token_data.get('given_name'),
                last_name=token_data.get('family_name'),
                picture=token_data.get('picture'))
            await user.save()
            
        await AuthTokens.objects().create(
            refresh_token = refresh_token,
            access_token=access_token,
            user_sub = user.sub
        )
        access_token = create_access_token(ACCESS_TOKEN_LIFETIME, user.sub)
        refresh_token = create_refresh_token(REFRESH_TOKEN_LIFETIME, user.sub)
        refresh_cookie = Cookie('refresh_token', value=refresh_token, max_age=REFRESH_TOKEN_LIFETIME, secure=False, httponly=True)
        access_cookie = Cookie('access_token', value=access_token, max_age=ACCESS_TOKEN_LIFETIME, secure=False, httponly=False)
        user_cookie = Cookie('auth_user', value=json.dumps(serialize_datetime_fields(user.to_dict())), max_age=ACCESS_TOKEN_LIFETIME, secure=False, httponly=False)
        response = Redirect('http://localhost:5173', cookies=(refresh_cookie, access_cookie, user_cookie))
        return response
  
    @get('/google/start')
    async def start_google_oauth(self, request:Request[Any, Any, Any])->Redirect:
        state = generate_secret_token(32)
        code_verifier = generate_secret_token(64)
        code_challenge = generate_code_challenge(code_verifier)
        query_params = {
            'response_type': 'code',
            'client_id': GOOGLE_CLIENT_ID,
            'redirect_uri': GOOGLE_REDIRECT_URI,
            'scope': 'openid profile email',
            'state': state,
            'code_challenge': code_challenge,
            'code_challenge_method': 'S256',
            'access_type': 'offline',
            'prompt': 'consent'
        }
        query_params_string = urlencode(query_params)
        redirect_url = f'{GOOGLE_OAUTH_START_URL}?{query_params_string}'
        random_string = generate_secret_token(32)
        file_store = request.app.stores.get('file_store')
        await file_store.set(random_string, json.dumps({'state': state, 'code_verifier':code_verifier}))
        oauth_cookie = Cookie(key='oauth_verifier', value=random_string, max_age=300, httponly=True, secure=False)
        redirect_response = Redirect(redirect_url, cookies=(oauth_cookie,))
        return redirect_response
        