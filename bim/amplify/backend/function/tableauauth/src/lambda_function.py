
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
        projects=[proj.name for proj in all_project_items]
        all_workbook_items, pagination_item = server.workbooks.get( )
        workbooks=[proj.name for proj in all_workbook_items]
        all_datasources_items, pagination_item = server.datasources.get( )
        datasources=[proj.name for proj in all_datasources_items]
        print([proj.name for proj in all_project_items])
        return {
      'statusCode': 200,
      'headers': {
          'Access-Control-Allow-Headers': '*',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST,GET',
          'Access-Control-Request-Headers': '*'
      },
      'body': [projects,workbooks,datasources]

  }
            # print("\nThere are {} datasources on site: ".format(pagination_item.total_available))
            # print([datasource.name for datasource in all_datasources])
            
  
       

   
   