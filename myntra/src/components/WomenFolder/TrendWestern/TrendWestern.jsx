import React from 'react';
import './TrendWestern.css'
import WesternImage from './TrendWesterndata.jsx' 
import Item from '../../ITEM/Item.jsx'
const TrendWestern = () => {

    return (
        <div className='TrendWestern-image-container'>
        <div className='TrendWestern-Items'>

{WesternImage.map((item,index)=>{
    return <Item key={index} image={item.Image} />
 
})}
</div>
    </div>
    );
}

export default TrendWestern;
