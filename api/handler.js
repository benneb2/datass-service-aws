'use strict';

const databaseManager = require('./databaseManager');
const uuidv1 = require('uuid/v1');

exports.users = (event, context, callback) => {
	console.log(event);

	switch (event.httpMethod) {
		case 'GET':
			getUser(event, callback);
			break;
		case 'POST':
			postUser(event, callback);
			break;
		default:
			sendResponse(404, `Unsupported method "${event.httpMethod}"`, callback);
	}
};

function postUser(event, callback) {
	
	const user = JSON.parse(event.body);

		
	if(typeof user.email == 'undefined')
	{
		sendResponse(400, "Please specify email", callback);
	}else
	{
		databaseManager.saveUser(user).then(response => {
			sendResponse(200, {user:user}, callback);
		}).catch(err =>{
			sendResponse(404, err, callback);
		});
	}
	
}

function getUser(event, callback) {
	
	const email = event.pathParameters.email;

	if(typeof email == 'undefined')
	{
		sendResponse(400, "Please specify email", callback);
	}else
	{
		databaseManager.getUser(email).then(response => {
			console.log(response);
			sendResponse(200, (response), callback);
		});
	}
}

function sendResponse(statusCode, message, callback) {
	const response = {
		statusCode: statusCode,
		body: JSON.stringify(message)
	};
	callback(null, response);
}
