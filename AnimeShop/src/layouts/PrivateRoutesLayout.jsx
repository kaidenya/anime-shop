import { Outlet, useLocation, Navigate } from "react-router-dom";
import { projectAuth } from "../config/firebase";

const PrivateRoutesLayout = () => {
  const location = useLocation();

  return projectAuth.currentUser ? (<Outlet/>) :(
    <Navigate to='/registration' state={{from: location}} replace/>
  )
}

export default PrivateRoutesLayout