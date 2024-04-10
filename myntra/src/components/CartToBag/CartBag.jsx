import React from 'react';
import CartBagItem from '../CartToBag/CartBagItem.jsx';
import "./CartBag.css"
import Bag from '../BagCart/Bag.jsx';
import Readmore from '../Readmore/Readmore.jsx'
import Addmorewishlist from '../AddMoreWishlist/Addmorewishlist.jsx'
import  BagCoupon from '../Bagcoupons/BagCoupon.jsx'
import Address from '../address/Address.jsx'
import TotalAmount from '../totalAmount/TotalAmount.jsx'
const CartBag = () => {
    return (

        <div> 
        <Bag/>
        <div className='CartBag-product-container'>
            
         <div className='CartBag-leftside-container '>
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
