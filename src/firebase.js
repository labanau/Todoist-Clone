/* eslint-disable linebreak-style */
import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
  apiKey: '',
  authDomain: '',
  databaseURL: '',
  projectdId: '',
  storageBucket: '',
  messageSenderId: '',
  apiId: '',
});

export {firebaseConfig as firebase};
