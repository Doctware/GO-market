#!/usr/bin/python3

from app.models.base_model import BaseModel

my_model = BaseModel()
print(my_model.id)
print(my_model.created_at)
print(my_model.updated_at)
