import fetch from 'node-fetch';
export const handler = async (event) => {
  console.log(event);
  let json = {banner: "B00948044", "result": event.body.hashed_value, "arn": event.body.arn, "action": event.body.action, "value": event.body.value}
  
  let stringifiedJSON = JSON.stringify(json)
  
  const postRequest = await fetch(event.body.course_uri, {
	method: 'post',
	body: stringifiedJSON,
	headers: {'Content-Type': 'application/json'}
  })
  
  const apiResponse = await postRequest.json();
  console.log(apiResponse);
  // TODO implement
  const response = {
    statusCode: 200,
    body: JSON.stringify('Hello from Lambda!'),
  };
  return response;
};

