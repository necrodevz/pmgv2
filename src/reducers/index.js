import * as types from '../actionTypes'

export function lead(state = {isSending: false, isSent: false}, action) {
    switch(action.type) {
        case types.CREATE_LEAD:
            return Object.assign({}, state, {
                ...action.payload, 
                isSending: true,
                isSent: false
            })
        case types.LEAD_COMPLETE:
            return Object.assign({}, state, {
                isSending: false, 
                isSent: true
            })
        default:
            return state
    }
}

export function dash(state={}, action) {
    switch(action.type) {
        
        default:
            return state
    }
}