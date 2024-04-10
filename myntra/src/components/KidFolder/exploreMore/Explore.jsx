import React from 'react';
import './Explore.css';
import E1 from './E1.png'
import E2 from './E2.png'
import E3 from './E3.png'
import E4 from './E4.png'
 import E5  from './E5.png'
 import E6 from './E6.png'






const Explore = () => {
    return (
        <div className='Explore-main-container'>
           
                <ul className='E1-section'>
                   <li><img src={E1} alt='' className="E1"/></li>  
                     <li><img src={E2} alt='' className="E2"/></li>
                </ul>

                <ul className='E2-section'>
                 <li><img src={E3} alt='' className="E3"/></li>
                 <li><img src={E4} alt='' className="E4"/></li>
                </ul>

                <ul className='E3-section'>
                <li> <img src={E5} alt='' className="E5"/></li>
                <li> <img src={E6} alt='' className="E6"/></li>
                </ul>

               
           </div>
           
    );
}

export default Explore;
