import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCvoYufUoWXA-qgAVZFqyIbGSsEY5JHD3M",
  authDomain: "crwn-db-5f022.firebaseapp.com",
  databaseURL: "https://crwn-db-5f022.firebaseio.com",
  projectId: "crwn-db-5f022",
  storageBucket: "",
  messagingSenderId: "999689702892",
  appId: "1:999689702892:web:bd74cd81fead7c715284c9",
  measurementId: "G-H2GB88XJQ2"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;