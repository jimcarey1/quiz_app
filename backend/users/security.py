import secrets
from hashlib import sha256
from base64 import urlsafe_b64encode
import httpx
import jwt
from jwt import PyJWKClient
from jwt.exceptions import ExpiredSignatureError, InvalidTokenError
from litestar.security.jwt.token import Token
from typing import Any, Optional
from datetime import datetime, timedelta, timezone, date

from settings import *

def generate_secret_token(len:int)->str:
    return secrets.token_urlsafe(len)

def generate_code_challenge(code_verifier: str) -> str:
    digest = sha256(code_verifier.encode("ascii")).digest()
    return urlsafe_b64encode(digest).decode("ascii").rstrip("=")

async def exchange_code_for_tokens(code: str, code_verifier: str) -> dict:
    async with httpx.AsyncClient() as client:
        response = await client.post(
            "https://oauth2.googleapis.com/token",
            data={
                "grant_type": "authorization_code",
                "code": code,
                "redirect_uri": GOOGLE_REDIRECT_URI,
                "client_id": GOOGLE_CLIENT_ID,
                "client_secret": GOOGLE_CLIENT_SECRET,
                "code_verifier": code_verifier,
            },
            headers={
                "Content-Type": "application/x-www-form-urlencoded",
            },
        )
        response.raise_for_status()
        return response.json()
    
def decode_google_id_token(id_token: str) -> dict:
    jwk_client = PyJWKClient('https://www.googleapis.com/oauth2/v3/certs')
    GOOGLE_ISSUERS = {
        'https://accounts.google.com',
        'accounts.google.com'
    }
    signing_key = jwk_client.get_signing_key_from_jwt(id_token)

    payload = jwt.decode(
        id_token,
        signing_key.key,
        algorithms=["RS256"],
        audience=GOOGLE_CLIENT_ID,
        issuer="https://accounts.google.com",
    )

    if payload.get("iss") not in GOOGLE_ISSUERS:
        raise ValueError("Invalid Google token issuer")

    if not payload.get("email_verified"):
        raise ValueError("Google email is not verified")

    return payload

def _create_token(lifetime:int, sub:str, **kwargs):
    exp = datetime.now(timezone.utc) + timedelta(seconds=lifetime)
    token = Token(exp=exp, sub=sub, extras=kwargs)
    return token.encode(JWT_SECRET_TOKEN, algorithm='HS256')

def create_access_token(lifetime:int, sub:str):
    return _create_token(lifetime, sub)

def create_refresh_token(lifetime: int, sub:str):
    return _create_token(lifetime, sub, type='refresh')


def serialize_datetime_fields(data: dict) -> dict:
    for key, value in data.items():
        if isinstance(value, (datetime, date)):
            data[key] = value.isoformat()
    return data

def is_token_valid(token:str)->Optional[dict[str, Any]]:
    try:
        payload = jwt.decode(token, key=JWT_SECRET_TOKEN, algorithms=['HS256'], verify=True)
        return payload
    except (ExpiredSignatureError, InvalidTokenError):
        return None