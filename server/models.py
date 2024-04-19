from extensions import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin

class UserProfile(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password_hash = db.Column(db.String(128))

    @property
    def password(self):
        raise AttributeError('password is not a readable attribute')

    @password.setter
    def password(self, password):
        self.password_hash = generate_password_hash(password)

    def verify_password(self, password):
        return check_password_hash(self.password_hash, password)

class Recipe(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(255), nullable=False)
    instructions = db.Column(db.Text, nullable=False)
    category = db.Column(db.String(100))
    image_url = db.Column(db.String(255))
    country = db.Column(db.String(100))
    user_id = db.Column(db.Integer, db.ForeignKey('user_profile.id'))
    author = db.relationship('UserProfile', backref='recipes')

class Review(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    comments = db.Column(db.Text)
    rating = db.Column(db.Integer)
    user_id = db.Column(db.Integer, db.ForeignKey('user_profile.id'))
    recipe_id = db.Column(db.Integer, db.ForeignKey('recipe.id'))
    recipe = db.relationship('Recipe', backref='reviews')
