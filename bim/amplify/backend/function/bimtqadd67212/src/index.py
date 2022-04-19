"""import json

def handler(event, context):
  print('received event:')
  print(event)
  
  return {
      'statusCode': 200,
      'headers': {
          'Access-Control-Allow-Headers': '*',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
      },
      'body': json.dumps('Hello from your new Amplify Python lambda!')
  }
import boto3
import uuid
import tableauserverclient as TSC



client = boto3.client('dynamodb')
qcclient = boto3.client('quicksight')
s3 = boto3.client("s3")


def lambda_handler(event, context):
    tableau_auth = TSC.TableauAuth(event['username'], event['password'], event['sitename'])
    server = TSC.Server(event['siteurl'])
    # signin tableau and get project id
    with server.auth.sign_in(tableau_auth):
        all_datasources, pagination_item = server.datasources.get()
    print("\nThere are {} datasources on site: ".format(pagination_item.total_available))
    print([datasource.name for datasource in all_datasources])"""