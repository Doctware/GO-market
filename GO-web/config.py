#!/usr/bin/python3
""" This module contains configuration class """
import os


class Config:
    """ 
    The class config:
    Setting up secret key and database connection
    Creating environment variable
    """
    SECRET_KEY = os.getenv('SECRET_KEY', '52242')
    SQLALCHEMY_DATABASE_URI = os.getenv('DB_URL', 'mysql+pymysql://go_doctware:Adeyemi52242@localhost/gomarket_db')
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    
    # Enabling CORS for specific headers
    CORS_HEADERS = 'Content-Type'

    # Optionally enable debug mode
    DEBUG = os.getenv('FLASK_DEBUG', 'False').lower() in ['true', '1']


class DevelopmentConfig(Config):
    """ Development configuration class
        Setting database connection for development phase
    """
    DEBUG = True

    SQLALCHEMY_DATABASE_URI = os.getenv('DEV_DB_URL', 'mysql+pymysql://go_doctware:Adeyemi52242@localhost/gomarket_db')


class ProductionConfig(Config):
    """ Production Configuration class
        Setting up database connection for production phase
    """
    SQLALCHEMY_DATABASE_URI = os.getenv('DB_URL', 'mysql+pymysql://go_doctware:Adeyemi52242@loalhost/gomarket_db')


# Manage environment variables
config = {
    'development': DevelopmentConfig,
    'production': ProductionConfig,
    'default': DevelopmentConfig
}
