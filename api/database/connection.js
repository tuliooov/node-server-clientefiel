
var AWS = require("aws-sdk");

AWS.config.update({
    region: "us-east-1",
    endpoint: "http://dynamodb.us-east-1.amazonaws.com",
    accessKeyId: "AKIA2KQX5ESPLB3SMDV6",
    secretAccessKey: "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",
});

const DynamoDB = new AWS.DynamoDB.DocumentClient();

module.exports = DynamoDB;
