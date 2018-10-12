'use strict';

const AWS = require('aws-sdk');
// let dynamo = new AWS.DynamoDB.DocumentClient({endpoint:"http://127.0.0.1:4569/"});
let dynamo = new AWS.DynamoDB.DocumentClient();

const TABLE_NAME = 'users';

module.exports.initializateDynamoClient = newDynamo => {
	dynamo = newDynamo;
};

module.exports.saveUser = user => {
	
	const params = {
		TableName: TABLE_NAME,
		Item: user
	};

	return dynamo
		.put(params)
		.promise()
		.then(() => {
			return user;
		});
};

module.exports.getUser = email => {
	
	return new Promise(function (resolve, reject) { 
		var params = {
			TableName:TABLE_NAME,
			FilterExpression: "#email = :email",
			ExpressionAttributeNames: {
				"#email": "email",
			},
			ExpressionAttributeValues: {
				 ":email": email
			}
		};

		dynamo.scan(params, (err, data) => {
			if(err)
				reject(err);
			else
				resolve(data.Items);
		});

	} );
};
