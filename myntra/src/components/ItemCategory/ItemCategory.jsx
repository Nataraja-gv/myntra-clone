import React from 'react';
import './ItemCategory.css'
const ItemCategory = (props) => {
    return (
        <div className='ItemCategory-container'>
           <img src={props.Image} alt='' className='ItemCategory-Images'/>
            
        </div>
    );
}

export default ItemCategory;
