import boto3
import tableauserverclient as TSC
import os



client = boto3.client('dynamodb')


def lambda_handler(event, context):
    tableau_auth = TSC.TableauAuth(event['username'], event['password'], event['sitename'])
    server = TSC.Server(event['siteurl'], use_server_version=True)
    # signin tableau and get project id
    with server.auth.sign_in(tableau_auth):
        # get all projects on site
        all_project_items, pagination_item = server.projects.get()
        projects=[proj.name for proj in all_project_items]

        for proj in all_project_items:
            client.put_item(
                TableName='Tableauproject1',
                Item={
                    'id': {
                        'S': proj.id
                    },
                    'name': {
                        'S': proj.name
                    },
                    'description': {
                        'S': proj.description
                    }
                }
            )
    with server.auth.sign_in(tableau_auth):
        all_datasources, pagination_item = server.datasources.get()
        print([datasource.id for datasource in all_datasources])
        datasources=[proj.name for proj in all_datasources]
        for datasource in all_datasources:
            # get the data source
            data_source = server.datasources.get_by_id(datasource.id)
            # get the connection information
            server.datasources.populate_connections(data_source)
            # print the information about the first connection item
            connection = data_source.connections[0]
            client.put_item(
                TableName='Tableaudatasources1',
                Item={
                    'projectid': {
                        'S': datasource.id
                    },
                    'filepath': {
                        'S': datasource.name + '.' + connection.connection_type
                    }
                }
            )

    with server.auth.sign_in(tableau_auth):
        all_workbooks, pagination_item = server.workbooks.get()
        print([workbook.id for workbook in all_workbooks])
        workbooks=[proj.name for proj in all_workbooks]

        for workbook in all_workbooks:
            # get the data source
            work_book = server.workbooks.get_by_id(workbook.id)
            # get the connection information
            server.workbooks.populate_connections(work_book)
            client.put_item(
                TableName='workbooks1',
                Item={
                    'Name': {
                        'S': work_book.name
                    },
                    'Id': {
                        'S': work_book.id
                    }
                }
            )
   
        # with open('C:/Users/mahesh/Desktop/view.pdf', 'wb') as v:
        #     v.write(view.image)
        #     filepath = os.path.abspath(v.name)
        #     print(filepath)
        """quicksight(context, event)"""
    response = {
        'statusCode': 200,
        'body': [projects,workbooks,datasources],
        'headers': {
          'Access-Control-Allow-Headers': '*',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST,GET',
          'Access-Control-Request-Headers': '*',
          'Content-Type':'application/json'
      },
    }

    return response