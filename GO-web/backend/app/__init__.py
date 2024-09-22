#!/usr/bin/python3
""" This magic module contains Flask app """
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_login import LoginManager
from flask_cors import CORS
from config import Config


db = SQLAlchemy()
migrate = Migrate()
login_manager = LoginManager()


def create_app():
    """ Creating application

        Implementing ORM, migration, and login access
    """
    app = Flask(__name__)
    app.config.from_object(Config)

    db.init_app(app)
    migrate.init_app(app, db)
    login_manager.init_app(app)

    CORS(app)  # Enabling CORS for the front-end communication

    # Importing blueprint/routes
    from backend.go_app import go_app_bp
    app.register_blueprint(go_app_bp, url_prefix='/api')

    return app
