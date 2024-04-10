import React, { useContext, useState } from 'react';
import './ProductInfo.css';
import { PiHandbagThin } from "react-icons/pi";
import { CiHeart } from "react-icons/ci";
import { FaRupeeSign } from "react-icons/fa";
import { CiDeliveryTruck } from "react-icons/ci";
import rightmark from './rightmark.png'
import { FaAmazonPay } from "react-icons/fa";
import { LiaExchangeAltSolid } from "react-icons/lia";
import { LiaTruckMovingSolid } from "react-icons/lia";
import { MdOutlineLocalOffer } from "react-icons/md";
import box from './box.png'
import { FcLike } from "react-icons/fc";
import { GoClock } from "react-icons/go";
import rupee  from './rupee.png'
import { ContextBeauty } from '../Context/Context';

const ProductInfo = ({product}) => {
   const {addToBag,addtoWishlist,}=useContext(ContextBeauty)


   const [isInWishlist, setIsInWishlist] = useState(false);

   const handleAddToWishlist = (productId) => {
      addtoWishlist(productId);
      setIsInWishlist(!isInWishlist);  
  }
    
    return (
        <div className='product-info-main-section'>
           <ul  className='title-description'>
            <li className='title'>{product.Title}</li>
            <li className='Discription'>{product.Discription}</li>
            </ul>

             
            <ul className='rating-container'>
                <li className='rating'>{product.rating}</li>
                <li ><img src={product.greenstar} style={{width:"16px",height:"16px"}}/></li>|
                <li className='popular'>{product.popular} Ratings</li>
                
            </ul>
             <hr/>

            <div className='amount-container'>
             <ul className='rupee-container'>
                <img src={rupee} alt='' className='rupee'/>
                <li className='new-amount'>{product.Namount}</li>
               

             </ul>
              
             <ul className='mrp-container'>
                <li>MRP</li>
                <li className='old-amount'>Rs.{product.Oamount}</li>
             </ul>

             <ul className='product-offer-section'>
                <p className='offer-offer'>{product.offer}</p>
             </ul>


            </div>

            <p className='inclusice-taxes'>inclusive of all taxes</p>


            <ul className='Select-Size-container'>
                <li style={{fontSize:"20px",fontWeight:"bold",textTransform:"uppercase"}}>Select Size</li>
                 <li className='btn-size'>{product.Sizes}</li>

            </ul>


            <div className='add-wishlist-container' >
            
                <ul className='add-bag' onClick={()=>{addToBag(product.id)}}> 
                 <PiHandbagThin  className='bag-icon'/> 
                 <li className='add-tobag-text'>ADD TO BAG</li>
                </ul> 

                
                 {/* <ul className='add-wishlist  ' onClick={()=>{addtoWishlist(product.id)}}>*/}
            <ul  className='add-wishlist-section'  onClick={() => {handleAddToWishlist(product.id)}}>
                 {!isInWishlist ?<ul className="add-wishlist" ><CiHeart className='product-heart'/><li className='wishlist-text-wishlist'>WISHLIST</li> </ul>:<ul className='add-wishlisted'><FcLike  className='product-heart'/><li className='product-wishlisted-list'>WISHLISTED</li> </ul>}
                
                </ul>  
            </div>

             
                 
      
            <hr/>

            <div className='amount-container'>
             <ul className='rupee-container'>
                <img src={rupee} alt='' className='rupee'/>
                <li className='new-amount'>{product.Namount}</li>
             </ul>

             <ul className='mrp-container'>
                 
                <li className='old-amount'>Rs.{product.Oamount}</li>
             </ul>

             <ul className='product-offer-section'>
                <p className='offer-offer'>{product.offer}</p>
             </ul>


            </div>


            <ul className='get-date'>
                <li>Get it by Wed, Apr 10 - 577516</li>
            </ul>

            <ul className='seller-section'>
                <li>Seller: <strong>Supercom Net</strong></li>
            </ul>

            <ul className='more-2-more'>
                <li>2 more sellers available</li>
            </ul>

             <div className='Eligible-products'>
                 <img src={box} className='box'/>
                <ul className='eligible-section'>
                    <li className='eligiable-get'>Get a Free {product.Discription}</li>
                     <li className='eligiable-order'>with order above Rs 799.0 <span>View More Eligible Products</span></li>

                </ul>
                <ul className='eligible-image'>
                    <li><img src={product.Image} style={{width:"100px",height:"100px"}}/></li>
                </ul>
             </div>


             <div className='Delivery-option-section'>
                <span className='delivary-option'>DELIVERY OPTIONS </span><span><CiDeliveryTruck className='delivary-truck' /> </span>
             </div>


             <div className='address-pincode'>
                <li className='pincode'>577516 (Nataraja)</li>
                <li><img src={ rightmark} className='rightmark'/></li>
                <li className='change'>Change</li>
             </div>

             <ul className='delivary-part-section'>
               <li><LiaTruckMovingSolid className='delivary-part-icon'/> </li> 
               <li className='delivary-part-text'>  Get it by Wed,Apr 10</li>
               </ul>


               <ul className='delivary-part-section'> 
               <li><FaAmazonPay  className='delivary-part-icon'/></li>
               <li className='delivary-part-text'>  Pay on delivery available</li>
               </ul>


               <ul className='delivary-part-section moreby-section'>
               <li><LiaExchangeAltSolid className='delivary-part-icon'/> </li> 
               <li className='delivary-part-text'>  Easy 14 days exchange available <span className='more-by' >More By </span> </li>  
               </ul>

             <p className='original-products'>100% Original Products</p>


             <ul className='product-best-offers'>
                <li className='best-offer-offer'>BEST OFFERS <MdOutlineLocalOffer /> 
                </li><br/>
                <li className='best-price'>BEST Price <span>Rs.303</span></li>

                <li className='best-offer-offer-text'>Applicable on: Orders above Rs. 100</li>
                <li className='best-offer-offer-text'>Coupon code: <strong>TRYBEAUTY</strong> </li>
                <li className='best-offer-offer-text'>Coupon Discount: 20% off (Your total saving: Rs. 96)</li>


               <h6 className='view-eligiable-products'>View Eligible Products</h6>
               <h6 className='Kotak-credit'>7.5% Discount on Myntra Kotak Credit Card</h6>
               <li className='max-Discount'>Max Discount Up to ₹750 on every spends.</li>


               <h6 className='terms-condtion'>Terms & Condition</h6>
               <h6 className='instant-discount'>12% Instant Discount on HDFC Bank Credit Card EMI</h6>
               <li className='min-spend'>Min Spend ₹5,000 ; Max Discount Up to ₹1,000</li>


               <h6 className='terms-condtion'>Terms & Condition</h6>
               <h6 className='instant-discount'>12% Instant Discount on HDFC Bank Debit Card EMI</h6>
               <li  className='min-spend'>Min Spend ₹5,000 ; Max Discount Up to ₹1,000</li>

               <h6 className='terms-condtion'>Terms & Condition</h6>
      </ul>
      <hr/>
      
      <ul className='expiry-date'>
         <li className=''><GoClock className='clock'/></li>
        <li className='expiry-txt'> <span>Expiry Date</span>  31 Jan 2025</li>
      </ul>
      <hr/>
                     

        </div>
    );
}

export default ProductInfo;
