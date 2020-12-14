import AWS from 'aws-sdk';

const ses = new AWS.SES({ region: 'us-east-1' });

async function sendMail(event, context) {
  const params = {
    Source: 'Gustavo.Peixoto.deAzevedo@gmail.com',
    Destination: {
      ToAddresses: ['Gustavo.Peixoto.deAzevedo@gmail.com'],
    },
    Message: {
      Body: {
        Text: {
          Data: 'Hello from Symprise!',
        },
      },
      Subject: {
        Data: 'Test Mail',
      },
    },
  };

  try {
    const result = await ses.sendEmail(params).promise();
    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
  }
}

export const handler = sendMail;