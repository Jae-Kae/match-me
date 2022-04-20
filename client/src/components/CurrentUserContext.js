import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const CurrentUserContext = createContext({});

export const useCurrentUserContext = () => useContext(CurrentUserContext);

export const CurrentUserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState();
  const [error, setError] = useState("");
  const [currentGenre, setCurrentGenre] = useState(["soul"]);
  const [eventInfo, setEventInfo] = useState([]);
  const [bioValue, setBioValue] = useState("");

  const provider = new GoogleAuthProvider();

  


  useEffect(() => {
    setLoading(true);
    const unsubscribe = onAuthStateChanged(auth, (res) => {
      res ? setCurrentUser(res) : setCurrentUser(null);
      setError("");
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const registerUser = (email, name, password) => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        return updateProfile(auth.currentUser, {
          displayName: name,
        });
      })
      .then((res) => console.log(res))

      .catch((err) => setError(err.message))
      .finally(() => {
        setLoading(false);
      });
  };

  const signInUser = (email, password) => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => console.log(res))
      .catch((err) => setError(err.message))
      .finally(() => {
        setLoading(false);
      });
  };

  const logoutUser = () => {
    signOut(auth);
  };

  const forgotPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  const signInWithGoogle = () => {
    setLoading(true);
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        console.log(result);
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        setCurrentUser(user);
        console.log("Google USER:", user);
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        // const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
        // The email of the user's account used.
        // const email = error.email;
        // The AuthCredential type that was used.
        // const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <CurrentUserContext.Provider
      value={{
        currentUser,
        loading,
        error,
        setLoading,
        registerUser,
        signInUser,
        logoutUser,
        forgotPassword,
        signInWithGoogle,
        currentGenre,
        setCurrentGenre,
        eventInfo,
        setEventInfo,
        bioValue,
        setBioValue,
      }}
    >
      {children}
    </CurrentUserContext.Provider>
  );
};
