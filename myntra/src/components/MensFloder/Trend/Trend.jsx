import React from 'react';
import './Trend.css'
import TrendImage from './Trenddata.jsx'
import Item from '../../ITEM/Item.jsx'
const Trend = () => {
    return (
        <div className='Trend-image-container'>
        <div className='Trend-Items'>

{TrendImage.map((item,index)=>{
return <Item key={index} image={item.Image} />;
})}
</div>
    </div>
    );
}

export default Trend;
