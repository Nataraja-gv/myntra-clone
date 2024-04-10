import React from 'react';
import './Footwear.css'
import FOOTWEARImage from './Footweardata'
import Item from '../../ITEM/Item.jsx'
const Footwear = () => {
    return (
        <div className='Footwear-image-container'>
        <div className='Footwear-Items'>

{FOOTWEARImage.map((item,index)=>{
    return <Item key={index} image={item.Image} />
 
})}
</div>
    </div>
    );
}

export default Footwear;
