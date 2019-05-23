export default {
    s3: {
      REGION: "us-east-1",
      BUCKET: "notes-app-upload-t1"
    },
    apiGateway: {
      REGION: "us-east-1",
      URL: "https://dz4q6jjlc1.execute-api.us-east-1.amazonaws.com/prod"
    },
    cognito: {
      REGION: "us-east-1",
      USER_POOL_ID: "us-east-1_nYRbepzqH",
      APP_CLIENT_ID: "59c4l8fm5ck957ek7qa1q3iqav",
      IDENTITY_POOL_ID: "us-east-1:c00dc733-ceb2-4f4f-83bb-adae4108136b"
    },
    MAX_ATTACHMENT_SIZE: 5000000
  };