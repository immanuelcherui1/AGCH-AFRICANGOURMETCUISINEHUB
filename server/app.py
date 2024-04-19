from flask import Flask
from extensions import db, bcrypt, login_manager, init_app

app = Flask(__name__)
app.config['SECRET_KEY'] = 'your_secret_key_here'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///site.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

init_app(app)

import models
import routes

if __name__ == '__main__':
    app.run(port=5555)
