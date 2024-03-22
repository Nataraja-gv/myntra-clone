import React from 'react';
import './Trend.css'
import TrendImage from './Trenddata.jsx'
const Trend = () => {
    return (
        <div className='Trend-image-container'>
        <div className='Trend-Items'>

{TrendImage.map((item,index)=>{
return(
  <div className=' '>
      <div className='Image-Image-TrendImage' key={index}>
           <img src={item.Image} alt="" className='Img-TrendImage-img' />
      </div>
  </div>
)
})}
</div>
    </div>
    );
}

export default Trend;
