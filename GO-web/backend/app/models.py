#!/usr/bin/python3
""" this module contains the class User ----  THE BASE MODEL"""
from backend.app import db
from flask_login import UserMixin
from werkzeug.security import generate_password_hash, check_password_hash


class User(UserMixin, db.Model):
    """ the class user
        
        this class implement Users incoming and existing info
    """
    __tablename__ = 'users'
    # Note db = SQLAlchemy while Integer is an attribute of SQLAlchemy
    # so in our case db.Integer :)
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password_hash = db.Column(db.String(128))
    role = db.Column(db.String(10), nullable=False)
    whatsapp = db.Column(db.String(20))


    def set_password(self, password):
        """ this method is used to set password for incomming user """
        self.password_hash = generate_password_hash(password)


    def check_password(self, password):
        """ this method is used to check existing user password """
        return check_password_hash(self.password_hash, password)

