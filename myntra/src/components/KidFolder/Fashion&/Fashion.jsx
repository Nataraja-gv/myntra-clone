import React from 'react';
import './Fashion.css'
import FashionImage from './FashionData.jsx';
const Fashion = () => {
    return (
        <div className='Fashion-main-container'>
        <div className='Fashion-Items'>

{  FashionImage.map((item,index)=>{
  return(
      <div className=' '>
          <div className='Image-Image-Fashion' key={index}>
               <img src={item.Image} alt="" className='Img-Fashion-img' />
               <p className='description'>{item.description}</p>

          </div>
      </div>
  )
})}
</div>
            
        </div>
    );
}

export default Fashion;
