import {hashSync} from 'bcrypt';

export const handler = async (event) => {
  // TODO implement
  let value = hashSync(event.value,12)
  console.log(value)
  let resp = event;
  resp['hashed_value'] = value;
  resp['arn'] = "arn:aws:lambda:us-east-1:402777111624:function:bcryptfunction";
  
  console.log(resp);
  
  const response = {
    statusCode: 200,
    body: resp,
  };
  return response;
};


