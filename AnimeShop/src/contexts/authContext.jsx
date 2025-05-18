import { createContext, useState, useEffect } from "react";
import { auth } from "../config/firebase";
import { onAuthStateChanged } from "firebase/auth";

export const Context = createContext();

export function AuthContext({children}){
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let unsubscribe;
    unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setLoading(false);
      if(currentUser) setUser(currentUser)
      else{setUser(null);}
    }, (error) =>{
      setLoading(false);
      console.error('Error in onAuthStateChanged: ', error);
    });
    return () => {
      if(unsubscribe) unsubscribe();
    }
  }, [auth]);
  const values = {
    user: user,
    setUser: setUser
  }
  return <Context.Provider value={{user, setUser}}>
      {!loading && children}
        </Context.Provider>
}