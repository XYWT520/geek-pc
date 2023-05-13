// import { combineReducers } from 'redux'
import login from './login'
import { combineReducers } from "@reduxjs/toolkit"

const rootReducer = combineReducers({
  login
})
export default rootReducer