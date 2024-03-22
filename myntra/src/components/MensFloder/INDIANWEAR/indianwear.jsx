import React from 'react';
import './indianwear.css'
import indianwearImage from './indianweardata'

const Indianwear = () => {
    return (
        <div className='Indianwear-image-container'>
        <div className='Indianwear-Items'>

{indianwearImage.map((item,index)=>{
return(
  <div className=' '>
      <div className='Image-Image-Indianwear' key={index}>
           <img src={item.Image} alt="" className='Img-Indianwear-img' />
      </div>
  </div>
)
})}
</div>
    </div>
    );
}

export default Indianwear;
