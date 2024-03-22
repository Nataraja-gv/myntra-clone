import React from 'react';
import './Footwear.css'
import FOOTWEARImage from './Footweardata'
const Footwear = () => {
    return (
        <div className='Footwear-image-container'>
        <div className='Footwear-Items'>

{FOOTWEARImage.map((item,index)=>{
return(
  <div className=' '>
      <div className='Image-Image-Footwear' key={index}>
           <img src={item.Image} alt="" className='Img-Footwear-img' />
      </div>
  </div>
)
})}
</div>
    </div>
    );
}

export default Footwear;
