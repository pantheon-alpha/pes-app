import {initializeApp} from 'firebase/app';
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDwWv7ynX4oA1gRFtY2o1dHWInucsFIYHg",
    authDomain: "pes-app-5fbf2.firebaseapp.com",
    projectId: "pes-app-5fbf2",
    storageBucket: "pes-app-5fbf2.appspot.com",
    messagingSenderId: "74982858022",
    appId: "1:74982858022:web:3e33bc9a975001e0a0b5e7",
    measurementId: "G-QVDTLFFXNP"
  };





const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export {auth, db};
