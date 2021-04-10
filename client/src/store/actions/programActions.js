import firebase from '../../config/fbConfig';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';

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
      authorFirstName: profile.firstName,     
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

