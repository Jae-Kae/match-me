import {initializeApp} from "firebase/app";
import { getFirestore} from 'firebase/firestore/lite';
import { getAuth } from "firebase/auth";
import {getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyAV5r9Y06Kq5B3RDCdWWfTBtTuE7YNAPoI",
  authDomain: "match-me-f98ec.firebaseapp.com",
  projectId: "match-me-f98ec",
  storageBucket: "match-me-f98ec.appspot.com",
  messagingSenderId: "1070448988372",
  appId: "1:1070448988372:web:713a0ba318bf2982cf2b41",
  measurementId: "G-Q38C0H53X1",
};


//config app
  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);
  export const auth = getAuth(app)
  export const storage = getStorage(app)


//storage