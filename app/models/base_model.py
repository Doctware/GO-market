#!/usr/bin/python3
""" The base model """
from datetime import datetime
from uuid import uuid4


class BaseModel:
    """ the toplevel class were i inherit from """
    def __init__(self):
        """ 
        Inisializing public instance
        """
        self.id = str(uuid4())
        self.created_at = datetime.now()
        self.updated_at = self.created_at
