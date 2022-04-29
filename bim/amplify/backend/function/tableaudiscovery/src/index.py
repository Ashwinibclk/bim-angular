import boto3
import tableauserverclient as TSC
import os
#import pandas as pd
import csv


client = boto3.client('dynamodb')
s3 = boto3.resource('s3')


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
        datasources=[proj.name for proj in all_datasources]
        print([datasource.id for datasource in all_datasources])
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
                    },
                    'name':{
                        'S': datasource.name
                    },
                }
            )

    with server.auth.sign_in(tableau_auth):
        all_workbooks, pagination_item = server.workbooks.get()
        workbooks=[proj.name for proj in all_workbooks]
        print([workbook.id for workbook in all_workbooks])
        for workbook in all_workbooks:
            work_book = server.workbooks.get_by_id(workbook.id)
            print(work_book.name)
            viewsheets = [view.name for view in work_book.views]
            view_ids = [view.id for view in work_book.views]
            print(viewsheets)
            for view_id in view_ids:
                view_item = server.views.get_by_id(view_id)
                print(view_item.name)
                server.views.populate_csv(view_item, req_options=None)
                with open('/tmp/view_data.csv', 'w') as f:
                    # bucket = s3.Bucket('bim-project')
                    # key = 'view_item.csv'
                    w = csv.writer(f)
                    # upload the data into s3
                    # bucket.upload_file('/tmp/view_data.csv', key)
                    with open('/tmp/view_data.csv', 'r') as file:
                        csvFile = csv.reader(file)
                        for lines in csvFile:
                            print("hello")
                            print(lines)
                    workbookview = server.workbooks.populate_views(work_book)

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


    response = {
        'statusCode': 200,
        'body': [projects,workbooks,datasources,viewsheets],
        'headers': {
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "POST,GET",
            "Access-Control-Request-Headers": "*",
            "Content-Type": "application/json"
        },
    }

    return response