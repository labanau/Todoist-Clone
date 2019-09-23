/* eslint-disable linebreak-style */
import firebase from "firebase/app";
import "firebase/firestore";
import apiConfig from "../src/apiKeys";

const firebaseConfig = firebase.initializeApp({
  apiKey: apiConfig.apiKey,
  authDomain: apiConfig.authDomain,
  databaseURL: apiConfig.databaseURL,
  projectId: apiConfig.projectId,
  storageBucket: apiConfig.storageBucket,
  messagingSenderId: apiConfig.messageSenderId,
  appId: apiConfig.apiId
});

export { firebaseConfig as firebase };
