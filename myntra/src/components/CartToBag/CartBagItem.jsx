import React, { useContext } from 'react';
import './CartToBag.css'
import { ContextBeauty } from '../Context/Context';
import Product from '../BeautyProducts/Product';
import { FaCaretDown } from "react-icons/fa";
import rupee from '../productInfo/rupee.png';
import { PiKeyReturnLight } from "react-icons/pi";import { FcCheckmark } from "react-icons/fc";
import { FaXmark } from "react-icons/fa6";
const CartBagItem = () => {
    const {HoverBeautyproducts,cart,removeFormBag}=useContext(ContextBeauty)
    return (
        <div className='container-container-main-container'>


                <div> 
                    {HoverBeautyproducts.map((item)=>{
                      if(cart[item.id]){
                         return(
                           <div className='cart-bag-item-container'>
                             
                              <div className=''> 
                                <img src={item.Image} className='cartbag-image-image'/>
                                {/* <button>{cart[item.id]}</button> 
                                 <button  onClick={()=>{addToBag(item.id)}}>+</button>
                                  <button  onClick={()=>{removeFormBag(item.id)}}>-</button> */}

                               </div>

                                <div className='bag-products-details'>
                                    <p className='bag-title'>{item.Title}</p>
                                    <p  className='bag-discription'>{item.Discription}</p>
                                    <p className='bag-sold'>Sold by : A.R.ENTERPRISES</p>

                                    <div className='cartbag-sort-section'>
                                     <ul className='cartbag-size'>
                                        <li className='cartbag-size-text'>Size:38</li>
                                        <li ><FaCaretDown  className='cartbag-size-icon'/></li>
                                     </ul>

                                     <ul className='cartbag-qty'>
                                        <li className='cartbag-qty-text'>Qty:{cart[item.id]}</li>
                                        <li ><FaCaretDown  className='cartbag-size-icon'/></li>
                                     </ul>

                                      

                                     </div>
                                     <div className='cartbag-payment-section'>
                                         <ul className='cartbag-namount'>
                                            <li className="cartbag-rupee"><img src={rupee}  className="cartbag-rupee-image"/></li>
                                            <li className='cartbag-newamount'>{item.Namount}</li>
                                         </ul>


                                         <ul className='cartbag-oamount'>
                                            {/* <li className="cartbag-rupee"><img src={rupee}  className="cartbag-rupee-image"/></li> */}
                                            <li className='cartbag-oldamount'>RS.{item.Oamount}</li>
                                         </ul>

                                         <ul className='cartbag-offer'>
                                            
                                            <li className='cartbag-offer'>{item.offer}</li>
                                         </ul>




                                     </div>


                                     <ul className='cartbag-return-policy'>
                                        <li  ><PiKeyReturnLight className='cartbag-return-policy-icon'/></li>
                                        <li className='cartbag-return-policy-text'><span>14 days</span> return available</li>
                                     </ul>

                                     <ul className='delivary-between-section'>
                                       <li><FcCheckmark className='delivary-between-right'/></li>
                                       <li className='delivary-between-txt'>Delivery between <span>11 Apr - 13 Apr</span></li>
                                     </ul>
                                </div>
                                <div className='bag-cancel-section'><FaXmark onClick={()=>{removeFormBag(item.id)}}/></div>

                                 
                           </div>
                           

                            
                           
                        )

                           }
                          })}
                </div> 
                 
        </div>
    );
}

export default CartBagItem;
