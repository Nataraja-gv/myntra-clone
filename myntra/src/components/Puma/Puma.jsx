import React from 'react';
import './Puma.css';
import PumaData from './PumaData'
import Item from '../ITEM/Item.jsx'


const Puma = () => {
    return (
        <div className='Puma-main-container'>
          <div className='heading-bold'>
          <h1 className='h1'>TRENDING IN PUMA</h1>
          </div>

           <div className='mynta-Puma-image-section'>
           {PumaData.map((item,index)=>{
            return <Item key={index} image={item.Image}/>})
           }
           </div> 

        </div>
    );
}

export default Puma;
