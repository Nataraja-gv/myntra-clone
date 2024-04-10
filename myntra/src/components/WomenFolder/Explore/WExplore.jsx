import React from 'react';
import './WExplore.css'
import WExploreImage from './WExploredata.jsx'
import  ItemExplore from '../../ItemExplore/ItemExplore.jsx'

const WExplore = () => {
    return (
        <div className='WExplore-image-container'>
        <div className='WExplore-Items'>

{ WExploreImage.map((item,index)=>{
return<ItemExplore key={index} Image={item.Image}/>;
 
})}
</div>
 

    </div>
    );
}

export default WExplore;
