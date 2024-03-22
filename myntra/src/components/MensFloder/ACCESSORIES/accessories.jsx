import React from 'react';
import './accessories.css'
import accessoriesImage from './accessoriesdata.jsx'
const Accessories = () => {
    return (
        <div className='Accessories-image-container'>
        <div className='Accssories-Items'>

{accessoriesImage.map((item,index)=>{
return(
  <div className=' '>
      <div className='Image-Image-Accssories' key={index}>
           <img src={item.Image} alt="" className='Img-Accssories-img' />
      </div>
  </div>
)
})}
</div>
    </div>
    );
}

export default Accessories;
