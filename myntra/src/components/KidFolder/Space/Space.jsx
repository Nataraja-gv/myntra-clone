import React from 'react';
import  space1 from'./space1.png'
import space2 from'./space2.png'
import './Space.css'
import './space2.png'
const Space = () => {
    return (
        <div className='Kidspace-container'>
        <div className='Space1'>
           <img src={space1} alt='' className='space1img '/>

        </div>

        <div className='Space2'>
           <img src={space2} alt='' className='space2img'/>
           
        </div>
            
        </div>
    );
}

export default Space;
