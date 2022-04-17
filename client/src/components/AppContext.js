import { createContext, useState, useEffect } from "react";


export const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
  const [allUsers, setAllUsers] = useState([]);
  const [allGenres, setAllGenres] = useState([]);

  //fetching all users in the database
  useEffect(() => {
    //replace with fetch to API/get-users
    fetch(`/api/get-users`)
      .then((res) => res.json())
      .then((data) => {
        if (data.data.length > 0) {
          setAllUsers(data.data);
        }
      });
  }, []);

  //fetching all Genres
  useEffect(() => {
    fetch(`/api/get-genres`)
      .then((res) => res.json())
      .then((data) => {
        if (data.data.length > 0) {
          setAllGenres(data.data[0].genres);
        }
      });
  }, []);

  return (
    <AppContext.Provider
      value={{
        allUsers,
        allGenres,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
