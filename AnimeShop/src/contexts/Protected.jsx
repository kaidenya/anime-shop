import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { Context } from "./authContext";

export function Protected({children}){
  const {user} = useContext(Context);
  
  if (!user) {
    return <Navigate to='/registration' replace/>
  }else{
    return children;
  }
}