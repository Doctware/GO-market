#!/usr/bin/python3
""" ths module contains the routing fnctions """
from flask import Blueprint, jsonify, request
from backend.app import db
from backend.models import User


go_app_bp = Blueprint('go_app', __name__)

@go_app_bp.route('/sellers', methods=['GET'])
def get_sellers():
    """ this function is used o fetch sellers """
    sellers = User.query.filter_by(role='seller').all()
    seller_data = [ {
        "id": sellers.id,
        "name": seller.name,
        "whatsapp": seller.whatsapp
        }
        for seller in sellers
    ]


@go_app_bp.route('/register', methods=['POST'])
def register_user():
    """ this function implement user registration """
    data = request.get_json()
    new_user = User(name=data['name'], email=data['email'], role=data['role'])
    db.session.add(new_user)
    db.session.commit()
    return jsonify({"message": "Successfuly registered to GO!!"}), 201
