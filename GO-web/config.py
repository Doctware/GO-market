#!/usr/bin/python3
""" this module contains configuraton """
import os


class Config:
    SECRET_KEY = os.getenv('SECRET_KEY', '52242')
    SQLALCHEMY_DB_URI = os.getenv('DATABASE_URL', 'mysql+pymysql://doctware:Adeyemi,52242./gomarket_db')
    SQLALCHEMY_TRACK_MODIFICATION = False
