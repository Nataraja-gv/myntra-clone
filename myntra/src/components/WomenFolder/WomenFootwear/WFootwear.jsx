import React from 'react';
import './WFootwear.css'
import   WFOOTWEARImage from './WFootweardata.jsx'
const WFootwear = () => {
    return (
        <div className='WFootwear-image-container'>
        <div className='WFootwear-Items'>

{  WFOOTWEARImage.map((item,index)=>{
return(
  <div className=' '>
      <div className='Image-Image-WFootwear' key={index}>
           <img src={item.Image} alt="" className='Img-WFootwear-img' />
      </div>
  </div>
)
})}
</div>
    </div>
    );
}

export default WFootwear;
