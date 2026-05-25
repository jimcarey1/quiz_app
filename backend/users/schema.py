from msgspec import Struct
from litestar.dto import MsgspecDTO
from datetime import datetime

class UserStruct(Struct):
    sub: str
    email: str
    name: str
    first_name: str
    last_name: str
    picture: str
    created_at: datetime
    updated_at: datetime

class UserDTO(MsgspecDTO[UserStruct]):...

