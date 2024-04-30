import React from 'react';
import './BagCoupons.css';
import { GoTag } from "react-icons/go";


const BagCoupon = () => {
    return (
        <div className='Bag-coupon-main-container'>
          <h1>coupons</h1>

          <div className='Apply-coupon-section'>
             
            <p className='coupon-txt'><span><GoTag className='coupon-tag' /></span>Apply Coupons</p>
            <ul className='Coupon-main-apply'> 
             
            <p className='Coupons-apply'>Apply</p>
            
            </ul>
            </div>
           <hr className='coupon-hr'/>

           <h2 className='support-coupon-social'>support Transformative social work in india</h2>

           <div className='donate-checkbox-Container'>
            <input type='checkbox' name='donate' style={{cursor:"pointer"}} />
            <p className='donate-txt'>Donate and make a difference</p>
           </div>

           <div className='donate-amount-section'>
            <li><span>&#8377;</span>10</li>
            <li><span>&#8377;</span>50</li>
            <li><span>&#8377;</span>100</li>
            
           </div>


           <h5 className='coupon-know-more'>Know More</h5>
           <hr className='coupon-hr'/>
            
        </div>
    );
}

export default BagCoupon;
