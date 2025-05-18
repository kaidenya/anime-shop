import { React, useState } from "react";
import styles from "./Registration.module.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";
import { useNavigate } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";

function Login(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    async function handleLogIn(e) {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
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
            <section id="loginForm">
                <form>
                    <h1>Zaloguj się</h1>
                    <div className={styles.inputbox}>
                        <ion-icon name="mail-outline"></ion-icon>
                        <input
                            type="email"
                            id="emailLogin"
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
                            id="passwordLogin"
                            required
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                        />
                        <label>Hasło</label>
                    </div>
                    <div className={styles.forget}>
                        <label>
                            <input type="checkbox" />
                            Zapamiętaj mnie
                        </label>
                    </div>
                    <button
                        id="submitLogin"
                        type="submit"
                        onClick={(e) => {
                            handleLogIn(e);
                        }}
                    >
                        Zaloguj się
                    </button>
                    <div className={styles.register}>
                        <p className={styles.formFooter}>
                            Nie masz konta?
                            <a
                                href="#"
                                className={styles.toggleForm}
                                onClick={props.toggleForm}
                            >
                                {" "}
                                Zarejestruj się
                            </a>
                        </p>
                    </div>
                </form>
            </section>
            
        </>
    );

    
}

export default Login;
