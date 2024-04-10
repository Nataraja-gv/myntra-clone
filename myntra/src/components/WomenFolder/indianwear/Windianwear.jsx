import React from 'react';
import './Windianwear.css'
import WindianwearImage from './Windianweardata.jsx'
import Item from '../../ITEM/Item.jsx'

const WIndianwear = () => {
    return (
        <div className='WIndianwear-image-container'>
        <div className='WIndianwear-Items'>

{WindianwearImage.map((item,index)=>{
    return <Item key={index} image={item.Image} />
 
})}
</div>
    </div>
    );
}

export default WIndianwear;
