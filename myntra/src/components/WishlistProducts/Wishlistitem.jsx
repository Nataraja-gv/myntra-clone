import React, { useContext } from 'react';
import './Wishlistitem.css'
import { ContextBeauty } from '../Context/Context';
import { HiMiniXMark } from "react-icons/hi2";
import Product from '../BeautyProducts/Product';
const Wishlistitem = () => {
    const{HoverBeautyproducts,addToBag ,wishlist,addtoWishlist,removeFromWishlist}=useContext(ContextBeauty)
    return (
        <div className='wishlist-grid-container'>
          {HoverBeautyproducts.map((item)=>{
            if(wishlist[item.id]>0){

                return(
                <div className='wishlist-container'>
                  <img src={item.Image} alt='' className='wishlist-image'/>
                  <ul className='wishlist-details-section'>
                    <li>{item.Discription}</li>

                  </ul>
                 
                  <ul className='wishlist-payment-section'>
                    <li className='wishlist-Namount'>RS.{item.Namount}</li>
                    <li className='wishlist-Oamount'>Rs.{item.Oamount}</li>
                    <li className='wishlist-offer'>{item.offer}</li>
                  </ul>

                  <div className='Move-to-bag-section'  >
                    <p onClick={()=>addToBag(item.id)}>Move to Bag</p>
                  </div>

                  <button onClick={()=>{removeFromWishlist(item.id)}} className='wishlist-wrong-mark'><HiMiniXMark /></button>

                </div>

            )
            }
          })}
            
        </div>
    );
}

export default Wishlistitem;
