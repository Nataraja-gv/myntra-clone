import React from 'react';
import WCategoriesImage from './WCategoriesdata.jsx';
import './WCategories.css'
const WCategories = () => {
    return (
        <div className='Wcategory-image-container'>
            <div className='WCategory-Items'>

{ WCategoriesImage.map((item,index)=>{
  return(
      <div className=' '>
          <div className='Image-Image-Wcategory' key={index}>
               <img src={item.Image} alt="" className='Img-Wcategory-img' />
          </div>
      </div>
  )
})}
</div>
        </div>
    );
}

export default WCategories;
