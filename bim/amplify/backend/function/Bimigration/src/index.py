import json
import datetime
import boto3
from flask_cors import CORS
from flask import Flask, jsonify, request
import awsgi

app = Flask(__name__)
CORS(app)
BASE_ROUTE = "/bimigration"

client = boto3.resource("dynamodb")
TABLE = "TableauLoginTable"
table = client.Table(TABLE)

@app.route(BASE_ROUTE, methods=['GET'])
def getlist():
  return jsonify(data = client.scan(
    TableName=TABLE
  ))


@app.route(BASE_ROUTE, methods=['POST'])
def createtableaulogin():
    request_json = request.get_json()
    table.put_item( Item={
        'Username': { 'S':  request_json.get("Username") },
        'Password': {'S': request_json.get("Password")},
        'sitename': {'S': request_json.get("sitename")},
        'siteurl': {'S': request_json.get("siteurl")},
    }
    )
    return  jsonify(message="item created")


def handler(event, context):
    return awsgi.response(app, event, context)