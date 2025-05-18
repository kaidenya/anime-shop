import { React, useEffect, useState } from "react";
import picture from "../assets/figure_aki.jpg";
import styles from "./ShoppingCart.module.css";
import { storage } from "../config/firebase";
import { ref, getDownloadURL } from "firebase/storage";

function ItemInCart({ name, type, price, file, onRemove }) {
    const [imageUrl, setImageUrl] = useState("");

    useEffect(() => {
        const fetchImage = async () => {
            const storageRef = ref(storage, `images/${file}`);
            try {
                const url = await getDownloadURL(storageRef);
                setImageUrl(url);
            } catch (error) {
                console.error("Error fetching image URL: ", error);
            }
        };
        fetchImage();
    });

    return (
        <>
            <div className={styles.itemInCart}>
                <img src={imageUrl} />
                <div>
                    <div>Nazwa produktu: {name}</div>
                    <div>Rodzaj produktu: {type}</div>
                    <div>Cena: {price} zł</div>
                    <div>
                        <span onClick={onRemove}>Usuń</span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ItemInCart;
