import React from 'react';
import './accessories.css'
import accessoriesImage from './accessoriesdata.jsx'
import Item from '../../ITEM/Item.jsx'
const Accessories = () => {
    return (
        <div className='Accessories-image-container'>
        <div className='Accssories-Items'>

{accessoriesImage.map((item,index)=>{
    return <Item key={index} image={item.Image} />
 
})}
</div>
    </div>
    );
}

export default Accessories;
