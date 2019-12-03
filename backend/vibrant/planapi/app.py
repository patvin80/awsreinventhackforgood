import json
import boto3
def lambda_handler(event, context):
    """Sample pure Lambda function

    Parameters
    ----------
    event: dict, required
        API Gateway Lambda Proxy Input Format

        {
            "resource": "Resource path",
            "path": "Path parameter",
            "httpMethod": "Incoming request's method name"
            "headers": {Incoming request headers}
            "queryStringParameters": {query string parameters }
            "pathParameters":  {path parameters}
            "stageVariables": {Applicable stage variables}
            "requestContext": {Request context, including authorizer-returned key-value pairs}
            "body": "A JSON string of the request payload."
            "isBase64Encoded": "A boolean flag to indicate if the applicable request payload is Base64-encode"
        }

        https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format

    context: object, required
        Lambda Context runtime methods and attributes

    Attributes
    ----------

    context.aws_request_id: str
         Lambda request ID
    context.client_context: object
         Additional context when invoked through AWS Mobile SDK
    context.function_name: str
         Lambda function name
    context.function_version: str
         Function version identifier
    context.get_remaining_time_in_millis: function
         Time in milliseconds before function times out
    context.identity:
         Cognito identity provider context when invoked through AWS Mobile SDK
    context.invoked_function_arn: str
         Function ARN
    context.log_group_name: str
         Cloudwatch Log group name
    context.log_stream_name: str
         Cloudwatch Log stream name
    context.memory_limit_in_mb: int
        Function memory

        https://docs.aws.amazon.com/lambda/latest/dg/python-context-object.html

    Returns
    ------
    API Gateway Lambda Proxy Output Format: dict
        'statusCode' and 'body' are required

        {
            "isBase64Encoded": true | false,
            "statusCode": httpStatusCode,
            "headers": {"headerName": "headerValue", ...},
            "body": "..."
        }

        # api-gateway-simple-proxy-for-lambda-output-format
        https: // docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
    """
    return {
        "statusCode": 200,
        "body": json.dumps(
            {"message": "hello world"}
        ),
    }

def planquestions(event, context):
    if (event["queryStringParameters"]["optin"] != "false"): 
        with open('./models/planmock.json') as json_file:
                data = json.load(json_file)
    else:
        with open('./models/planmocknoptin.json') as json_file:
                data = json.load(json_file)
    return {

        "statusCode": 200,
        "body": json.dumps(data),
    }

def planquestionexecution(event, context):
    if (event["queryStringParameters"]["optin"] != "false"): 
        with open('./models/planmockexecution.json') as json_file:
                data = json.load(json_file)
    else:
        with open('./models/planmockexecutionnoptin.json') as json_file:
            data = json.load(json_file)
    return {

        "statusCode": 200,
        "body": json.dumps(data),
    }

def plancreationsave(event, context):
    successmessage = "Success: Your Plan ID has been created - 1234"
    body = event['body']
    body_dict = json.loads(body)
    if (body_dict['optin'] == "true"):
        sns = boto3.client('sns')
        number = '+14698671583'
        sns.publish(PhoneNumber = number, Message='Plan ID has been created for you. Access it here with a Plan ID: 1234' )

    return {

        "statusCode": 200,
        "body": successmessage,
    }    

def planoutboundcall(event, context):
    connectclient = boto3.client('connect')

    response = connectclient.start_outbound_voice_contact(
        ContactFlowId= "a4996f21-169e-4ede-b295-af76a85ad720",
        DestinationPhoneNumber="+14698671583",
        InstanceId="17bbff90-8b60-4a39-92f3-fd6153203842",
        QueueId= "f8695c8f-2721-489c-b10b-73f0fc980775",
        SourcePhoneNumber="+18335188455"
    )
    return {
        "statusCode": 200,
        "body": json.dumps(
            {"message": "hello world"}
        )
    } 