#!/usr/bin/python3
""" This module contains the routing functions """
from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from backend.app import db
from backend.app.models import User

go_app_bp = Blueprint('go_app', __name__)

@go_app_bp.route('/sellers', methods=['GET'])
@login_required
def get_sellers():
    """ This function fetches the sellers. """
    if current_user.role != 'buyer':
        return jsonify({"error": "Not a GO buyer :)"}), 403

    sellers = User.query.filter_by(role='seller').all()
    seller_data = [
        {
            "id": seller.id,
            "name": seller.name,
            "whatsapp": seller.whatsapp
        }
        for seller in sellers
    ]
    return jsonify(seller_data), 200

@go_app_bp.route('/register', methods=['POST'])
def register_user():
    """ This function implements user registration """
    data = request.get_json()

    # Check if user with the email already exists
    if User.query.filter_by(email=data['email']).first():
        return jsonify({"error": "User with this email already exists"}), 409

    # Create new user
    new_user = User(
        name=data['name'], 
        email=data['email'], 
        role=data['role']
    )
    new_user.set_password(data['password'])  # Hashing the password
    db.session.add(new_user)
    db.session.commit()

    return jsonify({"message": "Successfully registered to GO!"}), 201
