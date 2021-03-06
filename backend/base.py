import json
from flask import Flask, request, jsonify, Blueprint
from datetime import datetime, timedelta, timezone
from flask_jwt_extended import create_access_token,get_jwt,get_jwt_identity, \
                               unset_jwt_cookies, jwt_required, JWTManager
from flask_cors import CORS, cross_origin



api = Flask(__name__)

# api = Blueprint('api', __name__)
CORS(api)


api.config["JWT_SECRET_KEY"] = "please-remember-to-change-me"
api.config["JWT_ACCESS_TOKEN_EXPIRES"] = timedelta(hours=2)
jwt = JWTManager(api)

@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello World!"
    }

    return jsonify(response_body), 200


@api.after_request
def refresh_expiring_jwts(response):
    try:
        exp_timestamp = get_jwt()["exp"]
        now = datetime.now(timezone.utc)
        target_timestamp = datetime.timestamp(now + timedelta(minutes=30))
        if target_timestamp > exp_timestamp:
            access_token = create_access_token(identity=get_jwt_identity())
            data = response.get_json()
            if type(data) is dict:
                data["access_token"] = access_token 
                response.data = json.dumps(data)
        return response
    except (RuntimeError, KeyError):
        # Case where there is not a valid JWT. Just return the original respone
        return response

@api.route('/token', methods=["POST"])
def create_token():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    if email != "test" or password != "test":
        return {"msg": "Wrong email or password"}, 401

    access_token = create_access_token(identity=email)
    response = {"access_token":access_token}
    return response

@api.route("/logout", methods=["POST"])
def logout():
    response = jsonify({"msg": "logout successful"})
    unset_jwt_cookies(response)
    return response

@api.route('/profile')
@jwt_required()
@cross_origin()
def my_profile():
    response_body = {
        "name": "Mallory",
        "about" :"Hello! I'm a full stack developer that loves python and javascript"
    }

@api.route('/allbeers', methods=["GET"])
@cross_origin()
def get_all_beers():
    url = 'https://api.catalog.beer/beer'
    r = request.get(url, auth = ('username', '51c83a47-8109-4a12-9d27-435205a13d83'), headers={"accept": "application/json", "content-type":"application/json"})
    response = r.json()
    return jsonify(response["data"]), 200


# @api.route('/allbeers', methods=['GET'])
# @cross_origin(origins=['http://localhost:3000'])
# def get_all_beers():
#     r = request.get(f'https://api.catalog.beer/beer')
#     headers = request.headers
#     auth = headers.get("username")
#     if auth == '51c83a47-8109-4a12-9d27-435205a13d83':
#         return jsonify({"message": "OK: authorized"}), 200
#     else:
#         return jsonify({"message": "ERROR: Unauthorized"}), 401
    
    