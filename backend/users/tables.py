from piccolo.table import Table
from piccolo.columns import Varchar, Email, Timestamptz, ForeignKey

class User(Table, tablename='users'):
    sub = Varchar(primary_key=True)
    email = Email(unique=True)
    name = Varchar()
    first_name = Varchar()
    last_name = Varchar()
    picture = Varchar()
    created_at = Timestamptz()
    updated_at = Timestamptz(auto_update=True)

class AuthTokens(Table, tablename='auth_tokens'):
    refresh_token = Varchar()
    access_token = Varchar()
    user_sub = ForeignKey(references=User, target_column='sub')