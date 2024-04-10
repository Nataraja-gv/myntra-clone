import React from 'react';
import './WFootwear.css'
import   WFOOTWEARImage from './WFootweardata.jsx'
import Item from '../../ITEM/Item.jsx'
const WFootwear = () => {
    return (
        <div className='WFootwear-image-container'>
        <div className='WFootwear-Items'>

{  WFOOTWEARImage.map((item,index)=>{
    return <Item key={index} image={item.Image} />
 
})}
</div>
    </div>
    );
}

export default WFootwear;
