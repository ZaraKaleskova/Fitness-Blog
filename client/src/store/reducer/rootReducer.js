import authReducer from './authReducer'
import programReducer from './programReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  auth: authReducer,
  program: programReducer
});

export default rootReducer;