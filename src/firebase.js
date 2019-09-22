/* eslint-disable linebreak-style */
import firebase from 'firebase/app';
import 'firebase/firestore';
import apiConfig from '../src/apiKeys';

const firebaseConfig = firebase.initializeApp({
  apiKey: apiConfig.apiKey,
  authDomain: apiConfig.authDomain,
  databaseURL: apiConfig.databaseURL,
  projectdId: apiConfig.projectdId,
  storageBucket: apiConfig.storageBucket,
  messageSenderId: apiConfig.messageSenderId,
  apiId: apiConfig.apiId,
});

export {firebaseConfig as firebase};
