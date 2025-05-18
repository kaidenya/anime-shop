import { React, useState } from "react";
import styles from "./Registration.module.css";
//import userSignup from '../auth/userSignup';
//import { useNavigate, useLocation } from 'react-router-dom';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";
import { useNavigate } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";

function Signup(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    //const [errorMessage, setErrorMessage] = useState(null);
    //
    //const navigate = useNavigate();
    //const location = useLocation();
    //
    //const from = location.state?.from?.pathname || '/'
    //
    //const {error, signUp} = userSignup();
    //
    //const handleSignup = async (e) => {
    //  e.preventDefault();
    //  await signUp(email, password);
    //  if(!error){
    //    navigate(from, {replace: true});
    //    setEmail("");
    //    setPassword("");
    //    return;
    //  } else {
    //    setErrorMessage(error)
    //  }
    //}

    const navigate = useNavigate();

    async function hanleSignUp(e) {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((user) => {
                console.log(user);
                navigate("/");
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <>
            <Header />
            <section id="registerForm">
                <form>
                    <h1>Rejestracja</h1>
                    <div className={styles.inputbox}>
                        <ion-icon name="mail-outline"></ion-icon>
                        <input
                            type="email"
                            id="emailRegister"
                            required
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                        />
                        <label>Email</label>
                    </div>
                    <div className={styles.inputbox}>
                        <ion-icon name="lock-closed-outline"></ion-icon>
                        <input
                            type="password"
                            id="passwordRegister"
                            required
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                        />
                        <label>Hasło</label>
                    </div>
                    <button
                        id="submitRegister"
                        type="submit"
                        onClick={(e) => {
                            hanleSignUp(e);
                        }}
                    >
                        Zarejestruj się
                    </button>
                    <div className={styles.register}>
                        <p className={styles.formFooter}>
                            Już zarejestrowani?
                            <a
                                href="#"
                                className={styles.toggleForm}
                                onClick={props.toggleForm}
                            >
                                {" "}
                                Zaloguj się
                            </a>
                        </p>
                    </div>
                </form>
            </section>
            
        </>
    );
}

export default Signup;
