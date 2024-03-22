import React from 'react';
import './Wsportswear.css'
import  WSportsImage from './Wsportsweardata.jsx'
const WsportsTrend = () => {
    return (
        <div className='WSports-image-container'>
        <div className=' WSports-Items'>

{ WSportsImage.map((item,index)=>{
return(
  <div className=' '>
      <div className='Image-Image-WSportsImage' key={index}>
           <img src={item.Image} alt="" className='Img-WSports-img' />
      </div>
  </div>
)
})}
</div>
    </div>
    );
}

export default  WsportsTrend ;
