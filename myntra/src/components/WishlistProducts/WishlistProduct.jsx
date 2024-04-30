import React, { useContext } from 'react';
import './WishlistProduct.css'
import Wishlistitem from './Wishlistitem.jsx'
import { ThemeContext } from '../ThemeContext/Theme.jsx';
const WishlistProduct = () => {
  const {theme}=useContext(ThemeContext)

    return (
        <div  className={theme==="light"? "wishlist-display-container-light":"wishlist-display-container"}>
        <Wishlistitem className="wishlist-items"/>
            
        </div>
    );
}

export default WishlistProduct;
