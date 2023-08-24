from flask import jsonify, request
from app import app, dbConn
from db_handler import search_user


@app.route('/login', methods=["POST"])  # Use 'methods' instead of 'method'
def login():
    loginDetails = request.get_json()
    userId = loginDetails.get("userId")
    pwd = loginDetails.get("pwd")
    result = search_user(dbConn, userId, pwd)
    if not result:
        return jsonify({"message": "Invalid Credentials"}), 401
    else:
        return jsonify({"message": "Login Successful"}),200