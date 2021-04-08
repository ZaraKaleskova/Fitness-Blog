import authReducer from './authReducer'
import programReducer from './programReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore';
import {firebaseReducer} from 'react-redux-firebase';

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  program: programReducer,
  auth: authReducer
});

export default rootReducer;

