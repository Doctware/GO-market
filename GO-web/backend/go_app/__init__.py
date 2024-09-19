#!/usr/bin/python3
""" ths module contains the routing fnctions """
from flask import Blueprint, jsonify, request
from flask import login_requires, current_user
from backend.app import db
from backend.models import User


go_app_bp = Blueprint('go_app', __name__)

@go_app_bp.route('/sellers', methods=['GET'])
@login_required
def get_sellers():

    """ this function is used to fetch sellers """

    if current_user.role != 'buyer':
        return jsonify({"error": "Not a GO buyer :)"})

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
