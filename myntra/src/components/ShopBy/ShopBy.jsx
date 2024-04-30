import React, { useContext } from 'react';
import './ShopBy.css'
import ShopByImages from './ShopByData.jsx';
// import shopby from './shopby.png'
import '../../components/pages/styles/heading.css'
import { ThemeContext } from '../ThemeContext/Theme.jsx';
const ShopBy = () => {
  const {theme}=useContext(ThemeContext)
    
    return (
        <div className='ShopBy-container'>
             {/* <div className='Shopby-title'>
              <img src={shopby} alt='coupon-title' className='ShopBy-img' />
            </div> */}

            <div className='heading-bold'>
              <h1 className='h1' style={theme==="light"?{color:"rgb(62, 65, 82)"}:{color:"white"}}>SHOP BY CATEGORY</h1>
            </div>
  
           <div className='ShopBy-Items'>

            {ShopByImages.map((item,index)=>{
                return(
                    <div className='ShopBy-Item-Item'>
                        <div className='Image-Image-shopby' key={item.id}>
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
