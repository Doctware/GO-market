#!/usr/bin/python3
""" this module runs flask App """
from app import create_app


app = create_app()

if __name__ == "__main__":
    app.run()
