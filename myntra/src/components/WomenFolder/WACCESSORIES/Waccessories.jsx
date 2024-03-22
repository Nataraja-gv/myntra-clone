import React from 'react';
import './Waccessories.css'
import WaccessoriesImage from './Waccessoriesdata.jsx'
const WAccessories = () => {
    return (
        <div className='WAccessories-image-container'>
        <div className='WAccssories-Items'>

{WaccessoriesImage.map((item,index)=>{
return(
  <div className=' '>
      <div className='Image-Image-WAccssories' key={index}>
           <img src={item.Image} alt="" className='Img-WAccssories-img' />
      </div>
  </div>
)
})}
</div>
    </div>
    );
}

export default WAccessories;
