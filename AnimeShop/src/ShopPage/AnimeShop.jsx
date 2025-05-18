import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import styles from "./AnimeShop.module.css";
import Product from "./Product";
import { db } from "../config/firebase";
import { getDocs, collection, query, limit } from "firebase/firestore";

function AnimeShop() {
    const [products, setProducts] = useState([]);

    const prCollectionRef = collection(db, "products");
    const limitedQuery = query(prCollectionRef, limit(8));

    useEffect(() => {
        const getProducts = async () => {
            // Fetching data
            try {
                const data = await getDocs(limitedQuery);
                const filteredData = data.docs.map((doc) => ({
                    ...doc.data(),
                    id: doc.id,
                }));
                setProducts(filteredData);
            } catch (error) {
                console.log(error);
            }
        };
        getProducts();
    }, []);

    return (
        <div className={styles.container}>
            <Header />
            <section id="main" className={styles.shopInfo}>
                <br />
                <h1>Witamy w naszym sklepie internetowym!</h1>
                <p>
                    W naszym sklepie znajdziesz szeroki wybór produktów anime.
                </p>
                <p>
                    Figurki postaci z ulubionych seriali anime. Popularne i najnowsze tomy mangi. Piękne obrazy z ulubionymi scenami z anime.
                </p>
                <h4>
                    Oferujemy szeroki wybór produktów dla każdego fana japońskiej animacji.
                </h4>
                <br />
                <br />
            </section>

            <section className={styles.product1}>
                <br />
                <br />
                <h2 id="goods">Najpopularniejsze pozycje!</h2>
                <div className={styles.proContainer}>
                    {products.map((p) => {
                        return (
                            <Product
                                key={p.id}
                                name={p.pname}
                                type={p.ptype}
                                price={p.pprice}
                                file={p.file}
                            />
                        );
                    })}
                </div>
            </section>

            <div className={styles.buttonContainer}>
                <Link to="/main" className={styles.viewAllButton}>
                    <b>Zobacz wszystkie produkty</b>
                </Link>
            </div>

            <Footer />
        </div>
    );
}

export default AnimeShop;
