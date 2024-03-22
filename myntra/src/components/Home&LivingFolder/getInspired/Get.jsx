import React from 'react';
import './Get.css'
import GetImageDetails from './Getdata.jsx'

const Get = () => {
    return (
        <div className='get-inspired-container'>
            <div className='get-inspired-title'>
                <p className='title'>Get Inspired.. </p>
                 <p className='subTitle'>Trends to Take Home</p>
            </div>

            <div className='get-imagedatial-container'>
            <div className='get-Items'>

{GetImageDetails.map((item,index)=>{
  return(
      <div className=' '>
          <div className='Image-Image-Get' key={index}>
               <img src={item.Image} alt="" className='Img-Get-img' />
               <p className='getdescription'>{item.description}</p>
               <p className='line'>{item.line}</p>

          </div>
      </div>
  )
})}
</div>
            </div>
        </div>
    );
}

export default Get;
