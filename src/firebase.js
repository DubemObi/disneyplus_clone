import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// import { initializeApp } from "firebase/app";
// // import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
// import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA71tgtpfcWWbHoqQRHCvDwZX44vtGoH7A",
    authDomain: "disney-clone-39c40.firebaseapp.com",
    projectId: "disney-clone-39c40",
    storageBucket: "disney-clone-39c40.appspot.com",
    messagingSenderId: "136954886160",
    appId: "1:136954886160:web:5cd02bb8b273674a703295",
    measurementId: "G-70R7QQPWGH"
};
  

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
// const auth = firebase.auth()
const provider = new GoogleAuthProvider()
// const storage = firebase.storage()

// const app = initializeApp(firebaseConfig);
// // const analytics = getAnalytics(app);
const auth = getAuth(firebaseApp)
const storage = getStorage(firebaseApp);
// const db = getFirestore(app);

export { auth, provider, storage};
export default db;