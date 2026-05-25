from piccolo.conf.apps import AppRegistry
from piccolo.engine.sqlite import SQLiteEngine

DB = SQLiteEngine('piccolo.sqlite')
APP_REGISTRY = AppRegistry(apps=["users.piccolo_app"])
