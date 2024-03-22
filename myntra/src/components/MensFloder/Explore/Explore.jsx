import React from 'react';
import './Explore.css'
import ExploreImage from './Exploredata.jsx'
const Explore = () => {
    return (
        <div className='Explore-image-container'>
        <div className='Explore-Items'>

{ ExploreImage.map((item,index)=>{
return(
  <div className=' '>
      <div className='Image-Image-Explore' key={index}>
           <img src={item.Image} alt="" className='Img-Explore-img' />
      </div>
  </div>
)
})}
</div>
    </div>
    );
}

export default Explore;
