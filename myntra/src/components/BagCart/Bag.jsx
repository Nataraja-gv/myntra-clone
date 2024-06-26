import React, { useContext } from 'react';
import './Bag.css'
import { CgBorderStyleDotted } from "react-icons/cg";
import bag from './empty-bag.png'
import { ThemeContext } from '../ThemeContext/Theme';
const Bag = () => {
   const {theme}=useContext(ThemeContext)

    return (
        <div className='Bag-main-conatiner'>

             <div className='Bag-first-section'> 

                   <div className='bag-ol-section'> 
           
                         <ol className="checkout-steps"> 
                          <li className="step step1 active">BAG</li> 
                            <li className="divider"><CgBorderStyleDotted className='dotted' /></li>
                            <li className="step step2">ADDRESS</li> 
                            <li className="divider"><CgBorderStyleDotted className='dotted' /></li>
                            <li className="step step3">PAYMENT</li>
                         </ol>
                    </div>

  
                       <div className="secureContainer">
                            <div className='Img'> 
                            <img src="https://constant.myntassets.com/checkout/assets/img/sprite-secure.png" className="secureIcon" width="26" height="28"/> 
                      </div>

                    <div className="secure" style={theme==="light"?{color:"#535766"}:{color:"black"}} >100% SECURE</div> 
             </div> 
             
           
        </div>


    {/* <div class="bag-second-section">
    <img src={bag} alt=""  className='BagImage'/>
    <div className="emptyCart-base-emptyText">Hey, it feels so light!</div>
    <div className="emptyCart-base-emptyDesc">There is nothing in your bag. Let's add some items.</div>
    <div data-testid="button" className="bag-wishlist-description">ADD ITEMS FROM WISHLIST</div>
    </div> */}


        </div>
    );
}

export default Bag;
