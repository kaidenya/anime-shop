import {React, useState, useEffect, useContext} from 'react'
import picture from '../assets/figure_aki.jpg' 
import basket from '../assets/basket.png' 
import styles from './AnimeShop.module.css'
import { storage } from '../config/firebase';
import { ref, getDownloadURL } from 'firebase/storage';
import { collection, doc, setDoc } from 'firebase/firestore';
import { Context } from '../contexts/authContext';
import { db } from '../config/firebase';

function Product({name,type,price,file}) {
  const [imageUrl, setImageUrl] = useState('');
  const { user } = useContext(Context);
  
  useEffect(() => {
    const fetchImage = async () => {
      const storageRef = ref(storage, `images/${file}`);
      try{
        const url = await getDownloadURL(storageRef);
        setImageUrl(url);
      }catch(error){
        console.error("Error fetching image URL: ", error);
      }
    };
    fetchImage();
  }, [file])

  const handleAddToCart = async () => {
    if (!user) {
      console.error("User is not authenticated");
      return;
    }
    
    const cartItem = {
      pname: name,
      ptype: type,
      pprice: price,
      file: file,
    };

    try {
      const cartCollectionRef = collection(db, "carts");
      const userCartDocRef = doc(cartCollectionRef, user.uid);
      const itemsCollectionRef = collection(userCartDocRef, "items");
      const itemDocRef = doc(itemsCollectionRef);

      await setDoc(itemDocRef, cartItem);
      console.log("Item added to cart:", cartItem);
    } catch (error) {
      console.error("Error adding item to cart: ", error);
    }
  };


  return (
  <>
  <div className={styles.pro}>
    <img src={imageUrl} alt=""/>
    <div className={styles.des}>
      <span>{type}</span>
      <h5>{name}</h5>
      <div className={styles.star}>
        <i>&#11088;</i>
        <i>&#11088;</i>
        <i>&#11088;</i>
        <i>&#11088;</i>
        <i>☆</i>
      </div>
      <h4>{price} zł</h4>
    </div>
    <a href="#1">
      <i className={styles.shoppingCart}>
        <img src={basket} alt="basket" onClick={handleAddToCart}/>
      </i>
    </a>
  </div>
  </>
  )
}
  
export default Product
