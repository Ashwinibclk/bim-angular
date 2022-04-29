import boto3
import csv

dynamodb_client = boto3.client('dynamodb')
client_qs = boto3.client('quicksight')
s3 = boto3.client("s3")


def lambda_handler(event, context):
    response = dynamodb_client.get_item(
        TableName='Tableaudatasources1',
        Key={
            'projectid': {'S':event["projectid"]},
            'filepath': {'S':event["path"]},
            # 'name': {'S': 'World Indicators'}
        }
    )
    print('hello')
    print(response)
    responses = dynamodb_client.get_item(
        TableName='Tableauproject1',
        Key={
            'id': {'S':event["id"]},
            'name': {'S':event["name"]}
        }
    )
    print('hi')
    print(responses)
    client_qs.create_data_source(
        AwsAccountId=event['awsaccountid'],
        DataSourceId=responses['Item']['id']['S'],
        Name=responses['Item']['name']['S'],
        Type='S3',
        DataSourceParameters={
            'S3Parameters': {
                'ManifestFileLocation': {
                    'Bucket': 'bim-project',
                    'Key': 'bimprojectfolder/CityData.manifest'
                }
            },
        },
        Permissions=[
            {
                'Principal': 'arn:aws:quicksight:us-east-1:519510601754:user/default/ashwini',
                'Actions': [
                    "quicksight:CreateDataSourcePermissions",
                    "quicksight:CreateDataSource",
                    "quicksight:UpdateDataSourcePermissions",
                    "quicksight:DescribeDataSource",
                    "quicksight:DescribeDataSourcePermissions",
                    "quicksight:PassDataSource",
                    "quicksight:UpdateDataSource",
                    "quicksight:DeleteDataSource",

                ]
            },
        ],
    )

    client_qs.create_data_set(
        AwsAccountId=event['awsaccountid'],
        DataSetId="dataset" + responses['Item']['id']['S'],
        Name=responses['Item']['name']['S'],
        PhysicalTableMap={
            'qs-test-data-1': {
                'S3Source': {
                    'DataSourceArn': 'arn:aws:quicksight:us-east-1:519510601754:datasource/' +
                                     responses['Item']['id']['S'],
                    'InputColumns': [
                        {
                            'Name': 'ID',
                            'Type': 'STRING'
                        },
                        {
                            'Name': 'Country',
                            'Type': 'STRING'
                        },
                        {
                            'Name': 'State',
                            'Type': 'STRING'
                        },
                        {
                            'Name': 'City',
                            'Type': 'STRING'
                        },
                        {
                            'Name': 'Amount',
                            'Type': 'STRING'
                        },
                    ]
                }
            }
        },
        ImportMode='SPICE',
        Permissions=[
            {
                'Principal': 'arn:aws:quicksight:us-east-1:519510601754:user/default/ashwini',
                'Actions': [
                    "quicksight:DescribeDataSet", "quicksight:DescribeDataSetPermissions", "quicksight:PassDataSet",
                    "quicksight:DescribeIngestion", "quicksight:ListIngestions", "quicksight:UpdateDataSet",
                    "quicksight:DeleteDataSet", "quicksight:CreateIngestion", "quicksight:CancelIngestion",
                    "quicksight:UpdateDataSetPermissions"

                ]
            },
        ],
        DataSetUsageConfiguration={
            'DisableUseAsDirectQuerySource': False,
            'DisableUseAsImportedSource': False
        }
    )

    client_qs.create_analysis(
        AwsAccountId=event['awsaccountid'],
        AnalysisId="analysis" + responses['Item']['id']['S'],
        Name='analysis' + responses['Item']['name']['S'],
        Permissions=[
            {
                'Principal': 'arn:aws:quicksight:us-east-1:519510601754:user/default/ashwini',
                'Actions': [
                    "quicksight:RestoreAnalysis",
                    "quicksight:UpdateAnalysisPermissions",
                    "quicksight:DeleteAnalysis",
                    "quicksight:DescribeAnalysisPermissions",
                    "quicksight:QueryAnalysis",
                    "quicksight:DescribeAnalysis",
                    "quicksight:UpdateAnalysis"
                ]
            },
        ],
        SourceEntity={
            'SourceTemplate': {
                'DataSetReferences': [
                    {
                        'DataSetPlaceholder': 'test',
                        'DataSetArn': 'arn:aws:quicksight:us-east-1:519510601754:dataset/' + "dataset" +
                                      responses['Item']['id']['S']
                    },
                ],
                'Arn': 'arn:aws:quicksight:us-east-1:519510601754:template/templatebotot3'
            }
        },
    )

    # client_qs.create_template(
    #     AwsAccountId="519510601754",
    #     TemplateId="template" + responses['Item']['id']['S'],
    #     Name="template" + responses['Item']['name']['S'],
    #     Permissions=[
    #         {
    #             'Principal': 'arn:aws:quicksight:us-east-1:519510601754:user/default/ashwini',
    #             'Actions': [
    #                 "quicksight:CreateTemplate",
    #                 "quicksight:DescribeTemplate",
    #                 "quicksight:ListTemplates",
    #                 "quicksight:DescribeTemplatePermissions",
    #                 "quicksight:DeleteTemplate",
    #                 "quicksight:UpdateTemplate",
    #             ]
    #         },
    #     ],
    #     SourceEntity={
    #         'SourceAnalysis': {
    #             # need source need to create demo dashboard in quicksight
    #             'Arn': "arn:aws:quicksight:us-east-1:519510601754:analysis/analysisboto3",
    #             'DataSetReferences': [
    #                 {
    #                     'DataSetPlaceholder': 'test',
    #                     'DataSetArn': 'arn:aws:quicksight:us-east-1:519510601754:dataset/' + "dataset" +responses['Item']['id']['S']
    #                 },
    #             ]
    #         },
    #     },
    #     VersionDescription='0'
    # )

    client_qs.create_dashboard(
        AwsAccountId=event['awsaccountid'],
        DashboardId="dashboard" + responses['Item']['id']['S'],
        Name="dashboard" + responses['Item']['name']['S'],
        Permissions=[
            {
                'Principal': 'arn:aws:quicksight:us-east-1:519510601754:user/default/ashwini',
                'Actions': [
                    'quicksight::DescribeDashboard',
                ]
            },
        ],
        SourceEntity={
            'SourceTemplate': {
                'DataSetReferences': [
                    {
                        'DataSetPlaceholder': responses['Item']['name']['S'],
                        'DataSetArn': 'arn:aws:quicksight:us-east-1:519510601754:dataset/' + "dataset" +
                                      responses['Item']['id']['S']
                    },
                ],
                'Arn': 'arn:aws:quicksight:us-east-1:519510601754:template/templatebotot3'
            }
        },
        VersionDescription='0',
    )

    response = {
        'statusCode': 200,
        'body': "auth successfully",
        'headers': {
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "POST,GET",
            "Access-Control-Request-Headers": "*",
            "Content-Type": "application/json"
        },
    }

    return response