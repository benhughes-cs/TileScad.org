from flask import Blueprint

api = Blueprint('api', __name__)

@api.route('/')
def index():
    return "called api!"


@api.route('/test')
def index():
    return "called test api!"
