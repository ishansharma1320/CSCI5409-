import hashlib
import json

def lambda_handler(event, context):
    # TODO implement
    value = hashlib.md5(event['value'].encode('utf-8'))
    response = event
    response['hashed_value'] = value.hexdigest()
    response['arn'] = "arn:aws:lambda:us-east-1:402777111624:function:md5hashfunction"
    print(response)
    return {
        'statusCode': 200,
        'body': response
    }
