from flask import Blueprint

api = Blueprint('api', __name__)

@api.route('/')
def index():
    return "called api!"



@api.route('/upload-design-array', methods=["POST"])
def get_uploaded_data():
    data = request.get_json()

    print(data)
    