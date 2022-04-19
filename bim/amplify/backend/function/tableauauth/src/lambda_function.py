
import json
import boto3
import uuid
import tableauserverclient as TSC
"""def handler(event, context):
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
  }"""
def lambda_handler(event, context):
    tableau_auth = TSC.TableauAuth(event['username'], event['password'], event['sitename'])
    server = TSC.Server(event['siteurl'])
    # signin tableau and get project id
    with server.auth.sign_in(tableau_auth):
        all_project_items, pagination_item = server.projects.get( )
        print([proj.id for proj in all_project_items])
        all_workbooks_items, pagination_item = server.workbooks.get( )
        # print names of first 100 workbooks
        print([workbook.name for workbook in all_workbooks_items])
        all_datasources, pagination_item = server.datasources.get( )
        print("\nThere are {} datasources on site: ".format(pagination_item.total_available))
        print([datasource.name for datasource in all_datasources])

   
    return  [proj.id for proj in all_project_items],[workbook.name for workbook in all_workbooks_items],[datasource.name for datasource in all_datasources]