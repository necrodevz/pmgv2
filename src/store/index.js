import { routerReducer } from 'react-router-redux'
import * as reducers from '../reducers'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { reducer as formReducer } from 'redux-form'

const reducer = combineReducers({
  ...reducers,
  router: routerReducer,
  form: formReducer
})

const enhancer = composeWithDevTools(
  applyMiddleware(thunkMiddleware)
)

const store = createStore(reducer, enhancer)

export default store;