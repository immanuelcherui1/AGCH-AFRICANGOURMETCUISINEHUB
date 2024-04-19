from flask import request, jsonify, redirect, url_for, flash
from app import app, db
from models import UserProfile, Recipe, Review
from flask_login import login_user, logout_user, login_required, current_user

@app.route('/')
def home():
    recipes = Recipe.query.all()
    return jsonify({'recipes': [{'title': recipe.title, 'instructions': recipe.instructions} for recipe in recipes]})

@app.route('/login', methods=['POST'])
def login():
    user = UserProfile.query.filter_by(email=request.json['email']).first()
    if user and user.verify_password(request.json['password']):
        login_user(user)
        return jsonify({'message': 'Logged in successfully'}), 200
    return jsonify({'error': 'Invalid credentials'}), 401

@app.route('/signup', methods=['POST'])
def signup():
    user = UserProfile(
        name=request.json['name'],
        email=request.json['email'],
        password_hash=generate_password_hash(request.json['password'])
    )
    db.session.add(user)
    db.session.commit()
    login_user(user)
    return jsonify({'message': 'User registered successfully'}), 201

@app.route('/logout')
@login_required
def logout():
    logout_user()
    return jsonify({'message': 'Logged out successfully'}), 200

@app.route('/recipeform', methods=['POST'])
def recipeform():
    recipe = Recipe(
        title=request.form['title'],
        instructions=request.form['instructions'],
        category=request.form['category'],
        country=request.form['country'],
        image_url=request.form['image_url'],
        author=current_user,
        # Assuming password is not related to the recipe data
    )
    db.session.add(recipe)
    db.session.commit()
    return jsonify({'message': 'Recipe submitted successfully'}), 201

