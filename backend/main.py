from litestar import Litestar
from litestar.config.cors import CORSConfig
from litestar.config.allowed_hosts import AllowedHostsConfig
from litestar.stores.file import FileStore

from users.controllers import UserController

file_store = FileStore('stores')

cors_config = CORSConfig(
    allow_origins=['http://localhost:5173'],
    allow_credentials=True
)

allowed_hosts = AllowedHostsConfig(['localhost', '127.0.0.1'])

app = Litestar(
    route_handlers=[UserController],
    cors_config=cors_config,
    allowed_hosts=allowed_hosts,
    stores = {
        'file_store': file_store
    },
    debug=True
)
