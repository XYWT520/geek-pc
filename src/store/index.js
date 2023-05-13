import { configureStore, applyMiddleware } from '@reduxjs/toolkit'
// import { legacy_createStore as createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers/index'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

const store = configureStore({ reducer: rootReducer }, composeWithDevTools(applyMiddleware(thunk)))

export default store