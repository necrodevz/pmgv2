import * as types from '../actionTypes'
import * as config from '../config'
import axios from 'axios'

/*
function addMessage(message) {
	return {
		type: types.ADD_MESSAGE,
		payload:{
			message: message
		}
	};
}
*/

function sendMessage() {
	return {type: types.SEND_MESSAGE};
}

function sendMessageSuccess() {
	return {type: types.SEND_MESSAGE_SUCCESS};	
}

export function updateMessage(payload) {
	return {
		type: 'UPDATE_MESSAGE',
		payload:payload
	}
}
export function submitMessage(message) {
	return function(dispatch) {
		//dispatch(addMessage(message));
		// eslint-disable-next-line
		(message) => {
			dispatch(sendMessage())
			return axios.post(config.MAIL_URL, 
				{
					"personalizations": 
						[
							{
								"to": [
									{
							          "email": message.email,
							          "name": message.name
							        }
					      		],
					      		"subject": "Message received from PMG WebApp"
					    	}
					  	],
					  	"from": 
					  		{
								"email": config.SYSTEM_EMAIL
							},
					  	"content": [
					    	{
					      		"type": "text/plain",
					      		"value": message.message
					    	}
					  	]
				},
				{
					// eslint-disable-next-line
					//headers: {`Authorization: Bearer ${config.MAIL_TOKEN}`},
					headers: {'Content-Type': 'application/json'},
				}
			)
			.then((response) => {
				sendMessageSuccess()
				console.log(response)
			})
			.catch((error) => {
				console.log(error)
			})
		}
	}
}

export function addApplication(application) {
	return {
		type: types.ADD_APPLICATION,
		payload: {
			application: application
		}
	};
}

export function sendApplication() {
	return {type: types.SEND_APPLICATION};
}

export function sendApplicationSuccess() {
	return {type: types.SEND_APPLICATION_SUCCESS};
}