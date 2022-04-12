import { createContext, useState, useEffect } from "react";
import {db } from "../firebase/firebase";
import { collection, getDocs } from "firebase/firestore/lite";
// import { async } from "@firebase/util";
// import {getDatabase, ref, set } from "firebase/database";

export const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
  
    //fetching all users in the database
  const [allUsers, setAllUsers] = useState([]);
  useEffect(() => {
    const getAllUsers = async (db) => {
      const users = collection(db, "users");
      const usersSnapshot = await getDocs(users);
      //create list of documents
      const usersList = usersSnapshot.docs.map((doc) => doc.data());
      
      return setAllUsers(usersList);
    }
    getAllUsers(db);
  }, []);



  //set current user info and registration

  return (
    <AppContext.Provider
      value={{
        allUsers,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
