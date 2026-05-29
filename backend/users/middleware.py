from litestar.security.jwt.middleware import JWTAuthenticationMiddleware
from litestar.exceptions import NotAuthorizedException
from litestar.connection import ASGIConnection
from litestar.middleware.authentication import AuthenticationResult

from typing import Any

class MyCustomJWTAuthenticationMiddleware(JWTAuthenticationMiddleware):
    async def authenticate_request(self, connection: ASGIConnection[Any, Any, Any, Any]) -> AuthenticationResult:
        """Given an HTTP Connection, parse the JWT api key stored in the header and retrieve the user correlating to the
        token from the DB.

        Args:
            connection: An Litestar HTTPConnection instance.

        Returns:
            AuthenticationResult if the token is valid and the user is found, else None.
        """
        auth_header = connection.headers.get(self.auth_header)
        if not auth_header:
            return AuthenticationResult(user=None, auth=None)
        encoded_token = auth_header.partition(" ")[-1]
        return await self.authenticate_token(encoded_token=encoded_token, connection=connection)
    
    async def authenticate_token(
        self, encoded_token: str, connection: ASGIConnection[Any, Any, Any, Any]
    ) -> AuthenticationResult:
        """Given an encoded JWT token, parse, validate and look up sub within token.

        Args:
            encoded_token: Encoded JWT token.
            connection: An ASGI connection instance.

        Returns:
            AuthenticationResult if the token is valid and the user is found, else None.
        """
        token = self.token_cls.decode(
            encoded_token=encoded_token,
            secret=self.token_secret,
            algorithm=self.algorithm,
            audience=self.token_audience,
            issuer=self.token_issuer,
            require_claims=self.require_claims,
            verify_exp=self.verify_expiry,
            verify_nbf=self.verify_not_before,
            strict_audience=self.strict_audience,
        )

        user = await self.retrieve_user_handler(token, connection)
        token_revoked = False

        if self.revoked_token_handler:
            token_revoked = await self.revoked_token_handler(token, connection)

        if not user or token_revoked:
            user = None, auth = None

        return AuthenticationResult(user=user, auth=token)
