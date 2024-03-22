import React from 'react';
import './Explore.css';
import E1 from './E1.png'
import E2 from './E2.png'
import E3 from './E3.png'
import E4 from './E4.png'
import E21 from './E21.png'
import E22 from './E22.png'
import E23 from './E23.png'
import E31 from './E31.png'
import E32 from './E32.png'
import E33 from './E33.png'
import E34 from './E34.png'





const Explore = () => {
    return (
        <div className='Explore-main-container'>
           <div className='explore-section-1'>
                <div className='E1-section'>
                    <img src={E1} alt='' className="E1"/>
                </div>

                <div className='E2-section'>
                    <img src={E2} alt='' className="E2"/>
                </div>

                <div className='E3-section'>
                    <img src={E3} alt='' className="E3"/>
                </div>

                <div className='E4-section'>
                    <img src={E4} alt='' className="E4"/>
                </div>
           </div>



           <div className='explore-section-2'>
                <div className='E1-section-2'>
                    <img src={E21} alt='' className="E21"/>
                </div>

                <div className='E2-section-2'>
                    <img src={E22} alt='' className="E22"/>
                </div>

                <div className='E3-section-2'>
                    <img src={E23} alt='' className="E23"/>
                </div>

                 
           </div>

            <div className='explore-section-3'>
                <div className='E1-section-3'>
                    <img src={E31} alt='' className="E31"/>
                </div>

                <div className='E2-section-3'>
                    <img src={E32} alt='' className="E32"/>
                </div>

                <div className='E3-section-3'>
                    <img src={E33} alt='' className="E33"/>
                </div>

                <div className='E3-section-3'>
                    <img src={E34} alt='' className="E34"/>
                </div>

                 
           </div>
            
        </div>
    );
}

export default Explore;
