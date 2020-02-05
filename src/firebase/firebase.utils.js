import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCCPlCGOoh2pPRvT-y3Ojg26e3eNFHElCU",
  authDomain: "react-crown-clothing.firebaseapp.com",
  databaseURL: "https://react-crown-clothing.firebaseio.com",
  projectId: "react-crown-clothing",
  storageBucket: "react-crown-clothing.appspot.com",
  messagingSenderId: "120958123594",
  appId: "1:120958123594:web:2046542ad938795d18f0b3",
  measurementId: "G-DQ1BVFG4E3"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;