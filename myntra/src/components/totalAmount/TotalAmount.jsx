import React, { useContext } from 'react';
import './TotalAmount.css'
import { ContextBeauty } from '../Context/Context';
const TotalAmount = (props) => {
    const {calculateTotalAmount,CalculatetotalMRP,discountMrp} =useContext(ContextBeauty)
    return (
        <div className='Total-amount-display-section'>
          <p className='total-amount-price-deatils'>Price Details</p>

          <div className='total-mrp-section'>
            <p className='Total-mrp-txt '>Total MRP</p>
            <p className='Total-mrp-amount '><span>&#8377;</span>{CalculatetotalMRP()}</p>
          </div>


          <div className='discount-mrp-section'>
            <p className='discount-discount-txt'>Discount on MRP</p>
            <p className='discount-discount-amount'>-<span>&#8377;</span>{discountMrp()}</p>
          </div>

          <div className='coupon-discount-section'>
            <p className='coupon-discount-txt'>Coupon Discount</p>
            <p className='coupon-discount-coupon'>Apply Coupon</p>
          </div>


          <div className='platform-fee-section'>
            <p className='platform-fee-txt'>Platform Fee<span>Know More</span></p>
            <p className='shipping-fee-free'> Free</p> 
            {/* <span>&#8377;</span>20 */}
          </div>

          <div className='shipping-fee-section'>
            <p className='shipping-fee-txt'>Shipping Fee<span>Know More</span><p className='shipping-fee-txt2'>Free Shipping for you</p></p>
            <p className='shipping-fee-free'>Free</p>
          </div>
        
          <hr className='coupon-hr'/>

          <div className='total-amount-final-section'>
            <p className='total-amount-final-txt'>Total Amount</p>
            <p className='total-amount-final-amount'><span>&#8377;</span>{calculateTotalAmount()}</p>
          </div>
            
            <div className='total-amount-btn-section'> 
               <button className='total-amount-btn'>Place Order</button>
            </div>
        </div>
    );
}

export default TotalAmount;
