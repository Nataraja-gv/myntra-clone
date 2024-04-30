import React, { useContext } from 'react';
import CartBagItem from '../CartToBag/CartBagItem.jsx';
import "./CartBag.css"
import Bag from '../BagCart/Bag.jsx';
import Readmore from '../Readmore/Readmore.jsx'
import Addmorewishlist from '../AddMoreWishlist/Addmorewishlist.jsx'
import  BagCoupon from '../Bagcoupons/BagCoupon.jsx'
import Address from '../address/Address.jsx'
import TotalAmount from '../totalAmount/TotalAmount.jsx'
import { ContextBeauty } from '../Context/Context.jsx';
import { ThemeContext } from '../ThemeContext/Theme.jsx';
const CartBag = () => {
    const {theme}=useContext(ThemeContext)

     
    return (

        <div> 
        <Bag/>
        <div className='CartBag-product-container'  style={theme==="light"?{borderColor:""}:{borderColor:"black"}}>
            
         <div className='CartBag-leftside-container ' style={theme==="light"?{borderColor:""}:{borderColor:"black"}}>
         <Address/>
         <Readmore/>
         
        <CartBagItem/>
        <Addmorewishlist/>
        </div>

         <div className='Coupons-rightside-container'>
          <BagCoupon/>
          <TotalAmount/>
         </div>
            
        </div>
        </div>
    );
}

export default CartBag;
