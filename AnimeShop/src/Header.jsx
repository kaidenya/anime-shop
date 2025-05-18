import { React } from "react";
import basket from "./assets/basket.png";
import { Link } from "react-router-dom";
import { auth } from "./config/firebase";
import { signOut } from "firebase/auth";

function Header() {
    async function handleSignOut(e) {
        try {
            await signOut(auth);
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <div className="header">
                <div className="container">
                    <div className="header-line">
                        <Link to="/" className="mainPageLink">
                            <p className="header-logo">AnimeShop</p>
                        </Link>
                        <div id="nav" className="nav">
                            <Link to="/main" className="nav-item" replace>
                                Produkty
                            </Link>
                            <a className="nav-item" href="#contact">
                                Kontakt
                            </a>
                            <a
                                className="nav-item"
                                onClick={(e) => {
                                    handleSignOut(e);
                                }}
                            >
                                Wyloguj
                            </a>
                            <div className="nav-image">
                                <Link to="/shoppingcart" replace>
                                    <img src={basket} alt="koszyk" />
                                </Link>
                            </div>
                            <a href="#" id="close">
                                <i>
                                    <img
                                        src="./image/criss-cross.png"
                                        alt="krzyż"
                                    />
                                </i>
                            </a>
                        </div>
                        <div id="mobile" className="nav-image">
                            <a href="#">
                                <img src="./image/profile.png" alt="profil" />
                            </a>
                            <a href="#">
                                <img src="./image/basket.png" alt="koszyk" />
                            </a>
                            <i id="bar">
                                <img src="./image/menu.png" alt="menu" />
                            </i>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;