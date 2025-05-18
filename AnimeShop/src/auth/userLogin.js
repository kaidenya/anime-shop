import { signInWithEmailAndPassword } from "firebase/auth";
import { projectAuth } from "../config/firebase";

let error = null;

const login = async (email, password) => {
  error = null;

  try{
    const res = await projectAuth.signInWithEmailAndPassword(email, password);
    error = null;
    if(!res){
      throw new Error("Щось пішло не так");
    }
    return res;
  }catch(error){
    console.error(error);
  }
};

const userLogin = () => {
  return {error, login};
}

export default userLogin;