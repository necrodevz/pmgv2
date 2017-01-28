import { routerReducer } from 'react-router-redux'
import { reducers } from '../reducers'
import { reducer as formReducer } from 'redux-form'
import thunkMiddleware from 'redux-thunk'
import { createStore, combineReducers, applyMiddleware } from 'redux'

const store = createStore(
  combineReducers({
    ...reducers,
    form: formReducer,
    routing: routerReducer
  }),
  applyMiddleware(thunkMiddleware)
)

export default store;