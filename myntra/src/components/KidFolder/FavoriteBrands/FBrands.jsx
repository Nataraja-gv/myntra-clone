import React from 'react';
import './FBrands.css'
import FBrandsData from './FBrandsData.jsx'

const FBrands = () => {
    return (
        <div className='Favorite-Brands-Container'>
            <div className='Favorite-Items'>

{  FBrandsData.map((item,index)=>{
  return(
      <div className=' '>
          <div className='Image-Image-Favorite' key={index}>
               <img src={item.Image} alt="" className='Img-Favorite-img' />
          </div>
      </div>
  )
})}
</div>
        </div>
    );
}

export default FBrands;
