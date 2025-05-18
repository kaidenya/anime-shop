import { createUserWithEmailAndPassword } from "firebase/auth";
import { projectAuth } from "../config/firebase";

let error = null;

const signUp = async (email, password) => {
  error = null;
  try{
    const res = await projectAuth.createUserWithEmailAndPassword(email, password);
    error = null;
    if(!res){
      throw new Error("Щось пішло не так");
    }
    return res;
  }catch(error){
    console.error(error);
  }
};

const userSignup = () => {
  return {error, signUp};
}

export default userSignup;