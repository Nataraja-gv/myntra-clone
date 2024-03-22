import React from 'react';
import './ShopBy.css'
import ShopByImages from './ShopByData.jsx';

const ShopBy = () => {
    return (
        <div className='ShopBy-container'>
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
