import React, { useContext, useState } from 'react';
import './Readmore.css';
import { BiSolidOffer } from "react-icons/bi";
import { MdKeyboardArrowUp } from "react-icons/md";
import { RiArrowDownSLine } from "react-icons/ri";
import { ThemeContext } from '../ThemeContext/Theme';
const Readmore = () => {
  const { theme } = useContext(ThemeContext);

    const [more,setMore]=useState(false)
    return (
        <div className='readmore-main-container' style={theme==="light"?{borderColor:""}:{borderColor:"black",backgroundColor:"#d6ccfe"}} >
           <div className='Available-offer-section'>
            <BiSolidOffer className='readmore-offer' style={theme==="light"?{color:""}:{color:"white"}}/> 
            <div className='available-offer' style={theme==="light"?{color:""}:{color:"white"}}>Available Offers</div>
          </div>

          <div className='readmore-offer'>
            <li className='readmore-list'>10% Instant Discount on ICICI  Bank Credit Cards on a min spend  of <span>&#8377;</span>3,500.TCA</li>
            {more &&
            <div>
            <li >12% Instant Discount on HDFC Bank Credit Bank EMI Transactions on a min spend of <span>&#8377;</span>5000.TCA</li>
            <li>12% Instant Discount on HDFC Bank Debit Bank EMI Transactions on a min spend of <span>&#8377;</span>5000.TCA</li>
            <li>7.5% Instant Discount on every spends with Myntra Kotak Credit Card .TCA</li>
            <li>Get <span>&#8377;</span>150 Brand Voucher on minimum  spend of <span>&#8377;</span>1,500 with Payzapp wallet </li>
            <li>Up to <span>&#8377;</span>250 Cashback on  Simple Transaction  on Myntra on a minimum  spend  of <span>&#8377;</span>1,499.TCS </li>
            <li>Flat <span>&#8377;</span>100 on Airtal Payments Bank transaction on a min spend of <span>&#8377;</span>1,000.TCA</li>
             
            </div>}
            <button onClick={()=>{setMore(!more)}}>{more?<div className='readmore-btn-section'> <p className='showmore-btn'>Show Less </p><p><MdKeyboardArrowUp  className='readmore-arrow'/></p>  </div>:<div className='readmore-btn-section'> <p className='showmore-btn'>Show More  </p><p><RiArrowDownSLine  className='readmore-arrow'/></p></div>}</button>

            
          </div>
            
        </div>
    );
}

export default Readmore;
