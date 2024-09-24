#!/usr/bin/python3
"""This module contains configuration classes for the Flask app."""
import os


class Config:
    """Base configuration class."""
    SECRET_KEY = os.getenv('SECRET_KEY', 'default_secret_key')  # It's good practice to change this.
    SQLALCHEMY_DATABASE_URI = os.getenv('SQLALCHEMY_DATABASE_URI', 'mysql+pymysql://go_doctware:Adeyemi52242@localhost/gomarket_db')
    SQLALCHEMY_TRACK_MODIFICATIONS = False  # Avoid unnecessary overhead

    # Enable Cross-Origin Resource Sharing (CORS) for the app
    CORS_HEADERS = 'Content-Type'

    # Optional: Enable debug mode based on environment variable
    DEBUG = os.getenv('FLASK_DEBUG', 'False').lower() in ['true', '1']


class DevelopmentConfig(Config):
    """Development-specific configuration."""
    DEBUG = True
    SQLALCHEMY_DATABASE_URI = os.getenv('DEV_DATABASE_URI', 'mysql+pymysql://go_doctware:Adeyemi52242@localhost/gomarket_db')


class ProductionConfig(Config):
    """Production-specific configuration."""
    SQLALCHEMY_DATABASE_URI = os.getenv('PROD_DATABASE_URI', 'mysql+pymysql://go_doctware:Adeyemi52242@localhost/gomarket_db')


# Dictionary to map different configurations
config = {
    'development': DevelopmentConfig,
    'production': ProductionConfig,
    'default': DevelopmentConfig
}
