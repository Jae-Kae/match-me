import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase";
import {createUserWithEmailAndPassword, 
    updateProfile, 
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    sendPasswordResetEmail} from "firebase/auth"

const CurrentUserContext = createContext({});

export const useCurrentUserContext = () => useContext(CurrentUserContext);

export const CurrentUserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState();
  const [error, setError] = useState("");

  useEffect(()=>{
    setLoading(true)
   const unsubscribe = onAuthStateChanged(auth, (res)=>{
        res ? setCurrentUser(res) : setCurrentUser(null)
        setError("")
        setLoading(false)
    })
    return unsubscribe;
  },[])


  const registerUser = (email, name, password) => {
      setLoading(true)
      createUserWithEmailAndPassword(auth, email, password)
      .then(()=>{
         return updateProfile(auth.currentUser, {
              displayName: name
          })
      }).then(res => console.log(res))
      .catch(err => setError(err.message))
      .finally(()=>{setLoading(false)})
  };

  const signInUser = (email, name, password) => {
      setLoading(true)
      signInWithEmailAndPassword(auth, email, password)
      .then(res => console.log(res))
      .catch(err => setError(err.message))
      .finally(()=>{setLoading(false)})
  };

  const logoutUser = () => {
      signOut(auth)
  }

  const forgotPassword = (email) => {
    return sendPasswordResetEmail(auth, email)
  }

  return (
    <CurrentUserContext.Provider 
    value={{
        currentUser,
        loading,
        error,
        registerUser,
        signInUser,
        logoutUser,
        forgotPassword,
    }}>
      {children}
    </CurrentUserContext.Provider>
    );
};
