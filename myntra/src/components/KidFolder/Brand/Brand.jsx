import React from 'react';
import './Brand.css'
import TopBrands from './BrandData.jsx'
const Brand = () => {
    return (
        <div className='Brands-Main-Container'>
          <div className='Brands-Brands-Items'>

{TopBrands.map((item,index)=>{
 return(
     <div className=' '>
         <div className='Image-Image-Brands' key={index}>
              <img src={item.Image} alt="" className='Img-Brands-img' />
               
         </div>
     </div>
 )
})}
</div>


            
        </div>
    );
}

export default Brand;
