import React from 'react';
import './Wsportswear.css'
import  WSportsImage from './Wsportsweardata.jsx'
import Item from '../../ITEM/Item.jsx'
const WsportsTrend = () => {
    return (
        <div className='WSports-image-container'>
        <div className=' WSports-Items'>

{ WSportsImage.map((item,index)=>{
    return <Item key={index} image={item.Image} />
 
})}
</div>
    </div>
    );
}

export default  WsportsTrend ;
