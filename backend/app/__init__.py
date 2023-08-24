from flask import Flask
from db_handler import create_connection

app = Flask(__name__)

dbConn = create_connection()

from app.routes import auth
