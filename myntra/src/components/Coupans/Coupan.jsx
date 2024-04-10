import React from 'react';
import './Coupan.css'
import title from './title.png'
import b1 from './banner1.png'
import b2 from './banner2.png'

const Coupan = () => {
    return (
        <div className='Coupan-conatiner'>
            <div className='Coupan-title'>
              <img src={title} alt='coupon-title' className='Coupan-img' />
            </div>

            <div className='Coupan-banner'>
            <img src={b1} alt='' className='banner'/> 
            <img src={b2} alt='' className='banner'/> 
           
            </div>
        </div>
    );
}

export default Coupan;
