import React from 'react'
import ReactDOM from 'react-dom'
import Routes from './Routes'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import thunk from 'redux-thunk'
import user from './ducks/user.js'


const myStore = applyMiddleware(promiseMiddleware())(createStore)
const rootReducer = combineReducers({user})


ReactDOM.render(
  <Provider store={myStore(rootReducer)}>
  	<Routes />
  </Provider>,
  document.getElementById('root')
)
