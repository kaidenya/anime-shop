import { React, useContext, useEffect, useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import styles from "./AnimeShop.module.css";
import Product from "./Product";
import { db } from "../config/firebase";
import { getDocs, collection } from "firebase/firestore";

function MainAnimeShop() {
    const [products, setProducts] = useState([]);
    const [filter, setFilter] = useState([]);
    const [selectedType, setSelectedType] = useState("");
    const [priceRange, setPriceRange] = useState("");

    const prCollectionRef = collection(db, "products");

    useEffect(() => {
        const getProducts = async () => {
            try {
                const data = await getDocs(prCollectionRef);
                const filteredData = data.docs.map((doc) => ({
                    ...doc.data(),
                    id: doc.id,
                }));
                setProducts(filteredData);
                setFilter(filteredData);
            } catch (error) {
                console.log(error);
            }
        };
        getProducts();
    }, []);

    useEffect(() => {
        filterProducts();
    }, [selectedType, priceRange, products]);

    const handleTypeFilter = (type) => {
        setSelectedType(type);
    };

    const handlePriceFilter = (Price) => {
        setPriceRange(Price);
    };

    const filterProducts = () => {
        let filtered = products;
        if (selectedType === "") {
            filtered = products;
        } else {
            filtered = filtered.filter(
                (product) => product.ptype === selectedType
            );
        }
        if (priceRange === "") {
            filtered;
        } else if (priceRange === "0-50") {
            filtered = filtered.filter(
                (product) => product.pprice >= 0 && product.pprice <= 50
            );
        } else if (priceRange === "50-100") {
            filtered = filtered.filter(
                (product) => product.pprice >= 50 && product.pprice <= 100
            );
        } else if (priceRange === "100-200") {
            filtered = filtered.filter(
                (product) => product.pprice >= 100 && product.pprice <= 200
            );
        }
        setFilter(filtered);
    };

    return (
        <>
            <Header />
            <section id="main" className={styles.shopInfo}>
                <div>
                    <div>Rodzaj produktu</div>
                    <select onChange={(e) => handleTypeFilter(e.target.value)}>
                        <option value="">Wszystkie produkty</option>
                        <option value="Manga">Manga</option>
                        <option value="Figurka">Figurka</option>
                        <option value="Obraz">Obraz</option>
                        <option value="Dakimakura">Dakimakura</option>
                    </select>
                </div>

                <div>
                    <div>Cena</div>
                    <select onChange={(e) => handlePriceFilter(e.target.value)}>
                        <option value="">Dowolna</option>
                        <option value="0-50">0-50</option>
                        <option value="50-100">50-100</option>
                        <option value="100-200">100-200</option>
                    </select>
                </div>
            </section>

            <section className={styles.product1}>
                <br />
                <br />
                <h2 id="goods">Produkty na sprzedaż</h2>
                <p>Figurki, Manga, Obrazy, Dakimakury na każdy gust</p>
                <div className={styles.proContainer}>
                    {filter.map((p) => {
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
            <Footer />
        </>
        
    );


    
}

export default MainAnimeShop;