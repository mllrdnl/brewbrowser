import os
from flask import Flask
from flask_migrate import Migrate
from flask_cors import CORS
from models import User
from base import api
from flask_sqlalchemy import SQLAlchemy
from admin import setup_admin
from flask_jwt_extended import JWTManager
from utils import APIException, generate_sitemap

app = Flask(__name__)
CORS(app, resources={r"/api/*":{"origins":"http://127.0.0.1:5000/"}})
app.config['CORS_HEADERS'] = "Content-Type"
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:////tmp/test.db'

cors = CORS(app, resources={r'/api/*': {'origins': '*'}})

db = SQLAlchemy(app)

ENV = os.getenv("FLASK_ENV")
static_file_dir = os.path.join(os.path.dirname(os.path.realpath(__file__)), '../public/')

if os.getenv("DATABASE_URL") is not None:
    app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URL')
else:
    app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:////tmp/test.db"

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
MIGRATE = Migrate(app, db)
db.init_app(app)

setup_admin(app)

# app.register_blueprint(api, url_prefix='/api')

# if __name__ == '__main__':
#     PORT = int(os.environ.get('PORT', 3001))
#     app.run(host='0.0.0.0', port=PORT, debug=True)

if __name__ == '__main__':
    app.run(debug=True)