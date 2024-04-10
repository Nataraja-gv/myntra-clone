import React from 'react';
import WCategoriesImage from './WCategoriesdata.jsx';
import './WCategories.css'
import ItemCategory from '../../ItemCategory/ItemCategory.jsx'
const WCategories = () => {
    return (
        <div className='Wcategory-image-container'>
            <div className='WCategory-Items'>

{ WCategoriesImage.map((item,index)=>{
  return<ItemCategory key={index} Image={item.Image} />
   
})}
</div>
        </div>
    );
}

export default WCategories;
