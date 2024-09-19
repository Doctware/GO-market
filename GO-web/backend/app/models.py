#!/usr/bin/python3
""" this module contains the class User ----  THE BASE MODEL"""
from backend.app import db
from flask_login import UserMixin
from werkzeug.security import generate_passowrd_hash, check_passwoed_hash


class User(UserMixin, db.model):
    """ the class user
        
        this class implement Users incoming and existing info
    """
    # Note db = SQLAlchemy while Integer is an attribute of SQLAlchemy
    # so in our case db.Integer :)
    id = db.Column(db.Integer, primary_key=True)
