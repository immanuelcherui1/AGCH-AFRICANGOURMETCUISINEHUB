#!/usr/bin/env python3

from flask import Flask, request, make_response, jsonify
from flask_marshmallow import Marshmallow
from flask_migrate import Migrate
from flask_restful import Api, Resource
from werkzeug.security import check_password_hash,generate_password_hash
import os
from flask_login import login_user
from flask_cors import CORS

from models import db, UserProfile, Recipe, Review

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
# app.json.compact = False
app.config['JSONIFY_PRETTYPRINT_REGULAR'] = True
app.config['UPLOAD_FOLDER'] = 'UPLOAD_FOLDER'

CORS(app)

migrate = Migrate(app, db)
db.init_app(app)

ma = Marshmallow(app)


# Marshmallow Schemas
class UserSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = UserProfile
        load_instance = True
        exclude = ('password_hash',)
    
    name = ma.auto_field()
    email = ma.auto_field()

    url = ma.Hyperlinks(
        {
            "self": ma.URLFor(
                "userprofilesbyid",
                values=dict(id="<id>")),
            "collection": ma.URLFor("userprofiles"),
        }
    )

user_schema = UserSchema()
users_schema = UserSchema(many=True)

class RecipeSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Recipe
    

recipe_schema = RecipeSchema()
recipes_schema = RecipeSchema(many=True)

class ReviewSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Review
        load_instance = True

review_schema = ReviewSchema()
reviews_schema = ReviewSchema(many=True)

# API Resources
api = Api(app)

class Index(Resource):

    def get(self):

        response_dict = {
            "index": " This is AGCH developed by a wonderful team: Immanuel, Linda, Mirriam & Sarah ",
        }

        response = make_response(
            response_dict,
            200,
        )

        return response

api.add_resource(Index, '/')

# Getting all Posts and posting to database
class RecipeList(Resource):

    def get(self):
        recipes = Recipe.query.all()
        # response = make_response(recipes_schema.dump(recipes)), 200
        return jsonify(recipes_schema.dump(recipes))


    def post(self):
        # Check for JSON data
        json_data = request.get_json()
        if not json_data:
            return jsonify({'message': 'No input data provided'}), 400

        # Validate and deserialize input
        try:
            data = recipe_schema.load(json_data)
        except ValidationError as err:
            return jsonify(err.messages), 422

        # Create new Recipe instance with the URL directly provided in the JSON
        recipe = Recipe(**data)
        db.session.add(recipe)
        db.session.commit()

        return recipe_schema.jsonify(recipe)
api.add_resource(RecipeList, '/recipes')


class RecipeDetail(Resource):
    def get(self, id):
        recipe = Recipe.query.filter_by(id=id).first()
        return recipe_schema.dump(recipe), 200

    def patch(self, id):
        recipe = Recipe.query.filter_by(id=id).first()
        for attr in request.form:
            setattr(recipe, attr, request.form[attr])
        db.session.commit()
        return recipe_schema.dump(recipe), 200

    def delete(self, id):
        recipe = Recipe.query.filter_by(id=id).first()
        db.session.delete(recipe)
        db.session.commit()
        return {'message': 'Recipe deleted'}, 200

api.add_resource(RecipeDetail, '/recipes/<int:id>')


class UserLogin(Resource):
    def post(self):
        data = request.get_json()
        user = UserProfile.query.filter_by(email=data['email']).first()
        if user and check_password_hash(user.password_hash, data['password']):
            # Using Flask-Login to handle the user session
            login_user(user)
            return {'message': 'Logged in successfully'}, 200
        else:
            return {'message': 'Invalid email or password'}, 401

api.add_resource(UserLogin, '/user/login')

class UserLogout(Resource):
    def post(self):
        # Assuming session management with Flask-Login
        logout_user()
        return {'message': 'Logged out successfully'}, 200

api.add_resource(UserLogout, '/user/logout')

class UserSignup(Resource):
    def post(self):
        data = request.get_json()
        # Check if user already exists
        if UserProfile.query.filter_by(email=data['email']).first():
            return {'message': 'User already exists'}, 400
        
        # Hash the password and create new user profile
        hashed_password = generate_password_hash(data['password'])
        new_user = UserProfile(email=data['email'], name=data['name'], password_hash=hashed_password)
        db.session.add(new_user)
        db.session.commit()
        
        return {'message': 'User created successfully'}, 201

api.add_resource(UserSignup, '/user/signup')


if __name__ == '__main__':
    app.run(port=5555, debug=True)
