from dotenv import load_dotenv
import os

load_dotenv()

GOOGLE_CLIENT_ID = os.getenv('GOOGLE_CLIENT_ID')
GOOGLE_CLIENT_SECRET = os.getenv('GOOGLE_CLIENT_SECRET')
GOOGLE_OAUTH_START_URL = 'https://accounts.google.com/o/oauth2/v2/auth'
GOOGLE_REDIRECT_URI = 'http://localhost:8000/accounts/google/callback'
JWT_SECRET_TOKEN = os.getenv('JWT_SECRET_TOKEN', 'my-secret-token')
ACCESS_TOKEN_LIFETIME = 60*30
REFRESH_TOKEN_LIFETIME = 60*60*24*30