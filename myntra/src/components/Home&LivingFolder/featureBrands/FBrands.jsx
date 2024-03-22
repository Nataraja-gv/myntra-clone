import React from 'react';
import FeatureBrandImage from './FBrandsdata.jsx'
import './FBrands.css'


const FBrands = () => {
    return (
        <div className='feature-brand-images'>
        <div className='feature-brand-Items'>

{  FeatureBrandImage.map((item,index)=>{
  return(
      <div className=' '>
          <div className='Image-Image-feature-brand' key={index}>
               <img src={item.Image} alt="" className='Img-feature-brand-img' />
               

          </div>
      </div>
  )
})}
</div>
            
        </div>
    );
}

export default FBrands;
