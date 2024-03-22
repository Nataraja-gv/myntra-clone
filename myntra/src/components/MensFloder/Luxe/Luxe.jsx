import React from 'react';
import './Luxe.css'
import LuxeImage from './LuxeData.jsx'
const Luxe = () => {
    return (
        <div className='Luxe-image-container'>
        <div className='Luxe-Items'>

{ LuxeImage.map((item,index)=>{
return(
  <div className=' '>
      <div className='Image-Image-LuxeImage' key={index}>
           <img src={item.Image} alt="" className='Img-LuxeImage-img' />
      </div>
  </div>
)
})}
</div>
    </div>
    );
}

export default Luxe;
