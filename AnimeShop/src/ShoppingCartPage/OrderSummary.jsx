import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ShoppingCart.module.css";

function OrderSummary({ fprice, amount }) {
    const navigate = useNavigate();

    const handleOrderClick = () => {
        navigate("/payment");
    };

    return (
        <>
            <div className={styles.orderSummary}>
                <div className={styles.summeryBox}>
                    <div>Zamówienie</div>
                    <div>
                        <div>Przedmiotów({amount}):</div>
                        <div>{fprice} zł</div>
                    </div>
                    <div>
                        {amount > 0 ? (
                            <>
                                <div>Dostawa:</div>
                                <div>50 zł</div>
                            </>
                        ) : (
                            <>
                                <div>Dostawa:</div>
                                <div>0 zł</div>
                            </>
                        )}
                    </div>
                    <div>
                        {amount > 0 ? (
                            <>
                                <div>Ostateczna cena:</div>
                                <div>{fprice + 50} zł</div>
                            </>
                        ) : (
                            <>
                                <div>Ostateczna cena:</div>
                                <div>0 zł</div>
                            </>
                        )}
                    </div>
                </div>
                <div className={styles.btnBody}>
                    {amount > 0 ? (
                        <button
                            className={styles.orderButton}
                            onClick={handleOrderClick}
                        >
                            Zamów
                        </button>
                    ) : (
                        <div>Dodaj produkt do koszyka, aby zamówić</div>
                    )}
                </div>
            </div>
        </>
    );
}

export default OrderSummary;
