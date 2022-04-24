import boto3

dynamodb_client = boto3.client('dynamodb')
client_qs = boto3.client('quicksight')
s3 = boto3.client("s3")


def quicksight(context, event):
    response = dynamodb_client.get_item(
        TableName='Tableaudatasources',
        Key={
            'projectid': {'S': 'd1652532-cd7f-44d4-8a40-38decb71d88c'},
            'filepath': {'S': 'World Indicators.hyper'}
        }
    )
    print(response['Item']['projectid']['S'])
    responses = dynamodb_client.get_item(
        TableName='Tableaudatasources',
        Key={
            'id': {'S': '6af9ca3e-777d-4abf-b643-a9322c0d9636'},
            'name': {'S': 'Sample Project11'}
        }
    )
    print(responses['Item']['id']['S'])
    client_qs.create_data_source(
        AwsAccountId='519510601754',
        DataSourceId=response['Item']['projectid']['S'],
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
                'Principal': 'arn:aws:quicksight:us-east-1:519510601754:user/default/mahesh',
                'Actions': [
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
        AwsAccountId="519510601754",
        DataSetId=response['Item']['projectid']['S'],
        Name=responses['Item']['name']['S'],
        LogicalTableMap={
            'order-logic-tables-1': {
                'Alias': '"Orders-demo2ss.csv',
                'DataTransforms': [
                    {
                        'ProjectOperation': {
                            'ProjectedColumns': [
                                "City",
                                "Country",
                                "Customer ID",
                                "Customer Name",
                                "Customer Segment",
                                "Order Date",
                                "Order ID",
                                "Order Priority",
                                "Postal Code",
                                "Product Category",
                                "Product Container",
                                "Product Name",
                                "Product Sub-Category",
                                "Region",
                                "Row ID",
                                "Ship Date",
                                "Ship Mode",
                            ]
                        },
                    },
                ],
                'Source': {
                    # 'PhysicalTableId': '5fd1e3f1-4134-4864-9245-d67395cdeaa1-demo',
                    'DataSetArn': 'arn:aws:quicksight:us-east-1:519510601754:dataset/f77668aa-9ebf-4a39-8411-46591e6ea3d6'
                }
            }
        },
        ImportMode='SPICE',
        Permissions=[
            {
                'Principal': 'arn:aws:quicksight:us-east-1:519510601754:user/default/mahesh',
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

    client_qs.create_template(
        AwsAccountId="519510601754",
        TemplateId='order-demo-1',
        Name='Order-template-1',
        SourceEntity={
            'SourceAnalysis': {
                'Arn': 'arn:aws:quicksight:us-east-1:519510601754:analysis/7197a3c8-1471-4e6f-addf-d3cd7a2975de',
                'DataSetReferences': [
                    {
                        'DataSetPlaceholder': 'order-demo',
                        'DataSetArn': 'arn:aws:quicksight:us-east-1:519510601754:dataset/5fd1e3f1-4134-4864-9245-d67395cdeaa1'
                    },
                ]
            },
        },
        VersionDescription='Version-0'
    )

    client_qs.create_analysis(
        AwsAccountId="519510601754",
        AnalysisId='7197a3c8-1471-4e6f-addf-d3cd7a2975de-demo',
        Name='demo-analysis',
        Permissions=[
            {
                'Principal': 'arn:aws:quicksight:us-east-1:519510601754:user/default/mahesh',
                'Actions': [
                    "quicksight:DescribeAnalysis", "quicksight:DescribeAnalysisPermissions", "quicksight:PassAnalysis",
                    "quicksight:DescribeIngestion", "quicksight:ListIngestions", "quicksight:UpdateAnalysis",
                    "quicksight:DeleteAnalysis", "quicksight:CreateIngestion", "quicksight:CancelIngestion",
                    "quicksight:UpdateAnalysisPermissions",
                ]
            },
        ],
        SourceEntity={
            'SourceTemplate': {
                'DataSetReferences': [
                    {
                        'DataSetPlaceholder': 'order-demo',
                        'DataSetArn': 'arn:aws:quicksight:us-east-1:519510601754:dataset/5fd1e3f1-4134-4864-9245-d67395cdeaa1-demo2'
                    },
                ],
                'Arn': 'arn:aws:quicksight:us-east-1:519510601754:template/order-demo-1'
            }
        },
    )

    client_qs.create_dashboard(
        AwsAccountId="519510601754",
        DashboardId=responses['Item']['id']['S'],
        Name=response['Item']['name']['S'],
        Permissions=[
            {
                'Principal': 'arn:aws:quicksight:us-east-1:519510601754:user/default/mahesh',
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
                        'DataSetArn': 'arn:aws:quicksight:us-east-1:519510601754:dataset/f77668aa-9ebf-4a39-8411-46591e6ea3d6'
                    },
                ],
                'Arn': 'arn:aws:quicksight:us-east-1:519510601754:template/Orders list/version/2'
            }
        },
        VersionDescription='string',
    )