import * as types from '../actionTypes'
import axios from 'axios'

export function createLead(payload) {
	return (dispatch) => {
		dispatch({
			type: types.LEAD_CREATE,
			payload:payload
		})
		
		let c = {
			method: 'post',
			url:'https://pmgapiv1.herokuapp.com/leads',
			xDomain:true,
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			data:payload
		}
		axios(c).then((response) => {
			dispatch({
				type: types.LEAD_COMPLETE,
				payload: response.data
			})
		})
	}
}



export function toggleLeadSubmit() {
	return {
		type: types.TOGGLE_LEAD_SUBMIT,
	}
}
