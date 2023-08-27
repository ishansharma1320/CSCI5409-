import hashlib
import json

def lambda_handler(event, context):
    # TODO implement
    value = hashlib.sha256(event['value'].encode("utf-8"))
    response = event
    response['hashed_value'] = value.hexdigest()
    response['arn'] = "arn:aws:lambda:us-east-1:402777111624:function:sha256function"
    
    print(response)

    return {
        'statusCode': 200,
        'body': response
    }
