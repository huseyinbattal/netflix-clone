import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB5gUl3FywMENEroyB99yGgvjEdYCs7wTA",
    authDomain: "netflix-clone-23723.firebaseapp.com",
    projectId: "netflix-clone-23723",
    storageBucket: "netflix-clone-23723.appspot.com",
    messagingSenderId: "899892361031",
    appId: "1:899892361031:web:bfb65b243a850eeadafe62"
};
  
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;