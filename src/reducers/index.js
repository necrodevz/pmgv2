import * as types from '../actionTypes'

export function lead(state = {isSending: false, isSent: false, canSubmit: false}, action) {
    switch(action.type) {
        case types.LEAD_CREATE:
            return Object.assign({}, state, {
                ...action.payload, 
                isSending: true,
                isSent: false
            })
        case types.LEAD_COMPLETE:
            return Object.assign({}, state, {
                ...action.payload,
                isSending: false, 
                isSent: true
            })
        case types.TOGGLE_LEAD_SUBMIT:
            return Object.assign({}, state, {
                ...state,
                canSubmit: !state.canSubmit
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