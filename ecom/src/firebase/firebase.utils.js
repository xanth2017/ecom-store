import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDntG0OFv3VH6gXJiPQ_B0clQofA_hGh4w",
    authDomain: "crwn-db-d97e9.firebaseapp.com",
    databaseURL: "https://crwn-db-d97e9.firebaseio.com",
    projectId: "crwn-db-d97e9",
    storageBucket: "",
    messagingSenderId: "368900229270",
    appId: "1:368900229270:web:6a8a724719c05e1fe85ab7",
    measurementId: "G-HBF09XHKT6"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;