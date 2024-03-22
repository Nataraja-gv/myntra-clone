import React from 'react';
import './Iconic.css'
import i1 from './i1.png'
import i2 from './i2.png'
import i3 from './i3.png'
import i4 from './i4.png'
import i5 from './i5.png' 

const Iconic = () => {
    return (
        <div className='Iconic-container'>
            <div className='Iconic-Items'  >
              <img src={i1} alt='' className='Img-Iconic-img'/>
            </div>

            <div className='Iconic-Items'>
              <img src={i2} alt='' className='Img-Iconic-img'/>
            </div>

            <div className='Iconic-Items'>
              <img src={i3} alt='' className='Img-Iconic-img'/>
            </div>

            <div className='Iconic-Items'>
              <img src={i4} alt='' className='Img-Iconic-img'/>
            </div>

            <div className='Iconic-Items' >
              <img src={i5} alt='' className='Img-Iconic-img'/>
            </div>
        </div>
    );
}

export default Iconic;
