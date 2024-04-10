import React  from 'react';
import './ProductImage.css'
import YouTube from 'react-youtube';
import view from '../BeautyFolder/FullDisplayaddress/view.png'


const ProductImage = ({product}) => {
     
    return (
        <div className='Product-Image-Conatiner-main'>
          <ul> 
          
          <li> <img src={product.Image} alt='' className='Image-product'/>  </li>
          <li> <img src={product.Image2} alt='' className='Image-product'/> </li>
          <li> <img src={product.Image3} alt='' className='Image-product'/> </li>
          <li> <img src={product.Image4} alt='' className='Image-product'/> </li>
           <li> <iframe width="300px" height="400px" className='Image-product' src={product.video}   allow=" autoplay;   " ></iframe></li>
            <li><img src={product.Image5} alt='' className='Image-product'/></li>
             
           </ul>
        <div className='viewsimilar-product-container'> 
           <div className='viewsimilar-product-main-container'>
                            
                               <span className='view-img-section-product'> <img src={view} alt=""  className='view-first-image-product'/> </span> 
                              <span className='view-text-product'>View Similer</span>
                           
            </div>
            </div>
        </div>
    );
}

 
export default ProductImage;
