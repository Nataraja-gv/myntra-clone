import React from 'react';
import './ShopBy.css'
import ShopByImages from './ShopByData.jsx';
// import shopby from './shopby.png'
import '../../components/pages/styles/heading.css'
const ShopBy = () => {
    return (
        <div className='ShopBy-container'>
             {/* <div className='Shopby-title'>
              <img src={shopby} alt='coupon-title' className='ShopBy-img' />
            </div> */}

            <div className='heading-bold'>
          <h1 className='h1'>SHOP BY CATEGORY</h1>
             </div>
  
           <div className='ShopBy-Items'>

            {ShopByImages.map((item,index)=>{
                return(
                    <div className='ShopBy-Item-Item'>
                        <div className='Image-Image-shopby' key={index}>
                             <img src={item.image} alt="" className='Img-Img-img' />
                        </div>
                    </div>
                )
            })}
           </div>
            
        </div>
    );
}

export default ShopBy;
