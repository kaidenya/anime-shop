import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBsBMEXJgJh7Kx-e0G0VVStmb37mtxv-LU",
  authDomain: "anime-shop-9b765.firebaseapp.com",
  projectId: "anime-shop-9b765",
  storageBucket: "anime-shop-9b765.appspot.com",
  messagingSenderId: "317981206175",
  appId: "1:317981206175:web:04c4d981de9c8dfb3524aa"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
//firebase.initializeApp(firebaseConfig);
//
//const projectAuth = firebase.getAuth();

//export {projectAuth};
/*export const AuthContext = createContext();

export const authContextProvider = props => {
  const [user, setUser] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(getAuth(), setUser, setError)
    return () => unsubscribe()
  }, [])
  return <AuthContext.Provider value={{user,error}} {...props}/>
}

export const useAuthState = () => {
  const auth = useContext(AuthContext)
  return {...auth, isAuthenticated: auth.user != null};
}*/