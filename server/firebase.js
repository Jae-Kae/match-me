const {initializeApp} = require("firebase/app");
const { getFirestore } = require ('firebase/firestore/lite');
const {getAuth} = require("firebase/auth")


const firebaseConfig = {
  apiKey: "AIzaSyAV5r9Y06Kq5B3RDCdWWfTBtTuE7YNAPoI",
  authDomain: "match-me-f98ec.firebaseapp.com",
  projectId: "match-me-f98ec",
  storageBucket: "match-me-f98ec.appspot.com",
  messagingSenderId: "1070448988372",
  appId: "1:1070448988372:web:713a0ba318bf2982cf2b41",
  measurementId: "G-Q38C0H53X1",
};




  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const auth = getAuth(app)


module.exports = {db, auth, app}
