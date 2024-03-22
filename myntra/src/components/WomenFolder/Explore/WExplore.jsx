import React from 'react';
import './WExplore.css'
import WExploreImage from './WExploredata.jsx'
const WExplore = () => {
    return (
        <div className='WExplore-image-container'>
        <div className='WExplore-Items'>

{ WExploreImage.map((item,index)=>{
return(
  <div className=' '>
      <div className='Image-Image-WExplore' key={index}>
           <img src={item.Image} alt="" className='Img-WExplore-img' />
      </div>
  </div>
)
})}
</div>
    </div>
    );
}

export default WExplore;
