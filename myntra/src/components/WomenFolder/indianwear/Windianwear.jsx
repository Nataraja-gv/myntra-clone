import React from 'react';
import './Windianwear.css'
import WindianwearImage from './Windianweardata.jsx'

const WIndianwear = () => {
    return (
        <div className='WIndianwear-image-container'>
        <div className='WIndianwear-Items'>

{WindianwearImage.map((item,index)=>{
return(
  <div className=' '>
      <div className='Image-Image-WIndianwear' key={index}>
           <img src={item.Image} alt="" className='Img-WIndianwear-img' />
      </div>
  </div>
)
})}
</div>
    </div>
    );
}

export default WIndianwear;
