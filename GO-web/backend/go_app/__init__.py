#!/usr/bin/python3
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flak_login import LoinManager
from config import Config


db = SQLAlchemy()
login_manager = LoginManager()
