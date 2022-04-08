import { createContext, useState, useEffect } from "react";


export const AppContext = createContext(null);

export const AppProvider = ({children}) => {
    const [users, setUsers] = useState([])

    //fetching all users in the database
    useEffect(()=>{
        fetch(`/api/get-users`)
          .then((res) => res.json())
          .then((data) => {
              console.log("USER INFO:", data.data)
            setUsers(data.data)
          });
        //will run once when the component loads and never again
    }, [])


    return(<AppContext.Provider value={{
        users,

    }}>
        {children}
    </AppContext.Provider>
    
    
    )
}