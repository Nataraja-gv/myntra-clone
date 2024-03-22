import React from 'react';
import './TrendWestern.css'
import WesternImage from './TrendWesterndata.jsx' 
const TrendWestern = () => {
    return (
        <div className='TrendWestern-image-container'>
        <div className='TrendWestern-Items'>

{WesternImage.map((item,index)=>{
return(
  <div className=' '>
      <div className='Image-Image-WesternImage' key={index}>
           <img src={item.Image} alt="" className='Img-WesternImage-img' />
      </div>
  </div>
)
})}
</div>
    </div>
    );
}

export default TrendWestern;
