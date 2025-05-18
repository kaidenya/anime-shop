import { projectAuth } from "../config/firebase";

let error = null;

const logout = async () => {
  error = null;

  try{
    await projectAuth.signOut();
  } catch(error){
    error = err.message;
  }
}

const userLogout = () => {
  return {error, logout};
}

export default userLogout;