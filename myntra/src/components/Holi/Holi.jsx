import React from 'react';
import './Holi.css'
import HoliData from './HoliData.jsx'
import Item from '../ITEM/Item.jsx' ;

const Holi = () => {
    return (
        <div className='Holi-main-container'>
          <div className='heading-bold'>
          <h1 className='h1'> MYNTRA HOLI</h1>
          </div>

           <div className='mynta-holi-image-section'>
           {HoliData.map((item,index)=>{
            return <Item key={index} image={item.Image}/>})
           }
           </div> 

        </div>
    );
}

export default Holi;
