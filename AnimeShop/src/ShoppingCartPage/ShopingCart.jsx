import { React, useContext, useEffect, useState } from 'react'
import Header from "../Header"
import Footer from '../Footer'
import styles from './ShoppingCart.module.css'
import OrderSummary from './OrderSummary'
import ItemInCart from './ItemInCart'
import { Context } from '../contexts/authContext'
import { db } from '../config/firebase'
import { doc, collection, getDocs, deleteDoc } from 'firebase/firestore'

function ShoppingCart() {
  const { user } = useContext(Context);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    if (user) {
      const fetchCartItems = async () => {
        const prCollectionRef = collection(doc(collection(db, "carts"), user.uid), "items");
        const data = await getDocs(prCollectionRef);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        console.log(filteredData)
        setCartItems(filteredData);
      };

      fetchCartItems();
    }
  }, [user]);

  const handleRemove = async (id) => {
    if (user) {
      const itemDocRef = doc(collection(doc(collection(db, "carts"), user.uid), "items"), id);
      await deleteDoc(itemDocRef);
      setCartItems(cartItems.filter(item => item.id !== id));
    }
  };

  const totalItems = cartItems.length;
  const totalPrice = cartItems.reduce((sum, item) => sum + item.pprice, 0);

  return (
    <>
      <Header />
      <div className={styles.cartBody}>
        <div className={styles.cartMainBody}>
          <div className={styles.orderReview}>Przegląd twojego zamówienia</div>
          <OrderSummary fprice={totalPrice} amount={totalItems} />
          {cartItems.map(item => {
            return (
              <ItemInCart
                key={item.id}
                name={item.pname}
                type={item.ptype}
                price={item.pprice}
                file={item.file}
                onRemove={() => handleRemove(item.id)} />
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default ShoppingCart;
