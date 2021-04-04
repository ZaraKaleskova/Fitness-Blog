import authReducer from './authReducer'
import programReducer from './programReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore';
import {firebaseReducer} from 'react-redux-firebase';

const rootReducer = combineReducers({
  auth: authReducer,
  program: programReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default rootReducer;