import React from 'react';
import './Explore.css'
import ExploreImage from './Exploredata.jsx'
import  ItemExplore from '../../ItemExplore/ItemExplore.jsx'
const Explore = () => {
    return (
        <div className='Explore-image-container'>
        <div className='Explore-Items'>

{ ExploreImage.map((item,index)=>{
return<ItemExplore key={index} Image={item.Image}/>;
})}
</div>
    </div>
    );
}

export default Explore;
