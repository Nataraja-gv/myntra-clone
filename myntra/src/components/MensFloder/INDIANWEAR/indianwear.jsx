import React from 'react';
import './indianwear.css'
import indianwearImage from './indianweardata'
import Item from '../../ITEM/Item.jsx'

const Indianwear = () => {
    return (
        <div className='Indianwear-image-container'>
        <div className='Indianwear-Items'>

{indianwearImage.map((item,index)=>{
    return <Item key={index} image={item.Image} />
})}
</div>
    </div>
    );
}

export default Indianwear;
