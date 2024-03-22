import React from 'react';
import './TopPicks.css'
import TopPicksImage from './TopPicksData.jsx';
const TopPicks = () => {
    return (
        <div className='TopPicks-container'>
        <div className='TopPicks-Items'>

{  TopPicksImage.map((item,index)=>{
  return(
      <div className=' '>
          <div className='Image-Image-TopPicks' key={index}>
               <img src={item.Image} alt="" className='Img-TopPicks-img' />
          </div>
      </div>
  )
})}
</div>
            
        </div>
    );
}

export default TopPicks;
