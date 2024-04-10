import React from 'react';
import './Waccessories.css'
import WaccessoriesImage from './Waccessoriesdata.jsx'
import Item from '../../ITEM/Item.jsx'
const WAccessories = () => {
    return (
        <div className='WAccessories-image-container'>
        <div className='WAccssories-Items'>

{WaccessoriesImage.map((item,index)=>{
    return <Item key={index} image={item.Image} />
 
})}
</div>
    </div>
    );
}

export default WAccessories;
