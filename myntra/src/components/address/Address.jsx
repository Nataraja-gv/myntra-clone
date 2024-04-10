import React from 'react';
import './Address.css'
const Address = () => {
    return (
        <div className='address-container'>
           <ul className='address-list'>
            <li className='address-deliver'>Deliver to : <strong>Nataraja GV, 560010</strong></li>
            <li className='address-details-deliver'>15/3,G,Floor,17 E ,Main Road ,70 Cross 5th Block, Rajaji nagar, Bangalore </li>
           </ul>

           <ul className='address-change-main-section'> 
             <li  className="change-address">Change Address</li>
           </ul>
            
        </div>
    );
}

export default Address;
