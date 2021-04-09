import firebase from '../../config/fbConfig';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';

// import { useAuthState } from 'react-firebase-hooks/auth';
// import { useCollectionData } from 'react-firebase-hooks/firestore';

// const auth = firebase.auth();

export const createProgram = (program) => {
  return (dispatch, getState, {getFirestore}) => {

    var user = firebase.auth().currentUser;
var email;
email = user.email;
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    firestore.collection('programs').add({
      ...program,
      // authorFirstName: profile.firstName,
      // authorLastName: profile.lastName,
      // authorName: profile.email,
      userEmail: email,
      authorId: authorId,      
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'CREATE_PROGRAM_SUCCESS' });
    }).catch(err => {
      dispatch({ type: 'CREATE_PROGRAM_ERROR' }, err);
    });
  }
};

