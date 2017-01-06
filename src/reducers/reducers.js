import * as types from '../actionTypes'

export function message(state = {
	name: "",
	email: "",
	message: "",
	isSending: false,
	isSubmitted: false
}, action) {
	switch(action.type){
		case types.ADD_MESSAGE:
			return Object.assign({}, state, {
					...action.payload.message,
					isSending: false,
					isSubmitted: false
			})
		case types.UPDATE_MESSAGE:
			return Object.assign({}, state, () => {
				switch (action.payload.key) {
					case "name":
						return {name:action.payload.value}
					case "email":
						return {email:action.payload.value}
					case "message":
						return {message: action.payload.value}
					default:
						return state
				}
			})
		case types.SEND_MESSAGE:
			return Object.assign({}, state, {
					isSending:true
			})
		case types.SEND_MESSAGE_SUCCESS:
			return Object.assign({}, state, {
					isSending: false,
					isSubmitted: true
			})
		default:
			return state
	}
}