import React from 'react';
import './ItemExplore.css'
const ItemExplore = (props) => {
    return (
        <div className='ItemExplore-container'>
         <img src={props.Image} alt='' className='ItemExplore-image' />
            
        </div>
    );
}

export default ItemExplore;
