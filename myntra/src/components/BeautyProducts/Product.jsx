import React, { useContext } from 'react';
import './Products.css'
import {ContextBeauty} from '../Context/Context'
// import { useParams } from 'react-router-dom';
import Breadcrum from '../Breadcrum/Breadcrum.jsx'
import { useParams } from 'react-router-dom';
import ProductImage from '../ProductImage/ProductImage.jsx'
import ProductInfo from '../productInfo/ProductInfo.jsx'
import ViewSimilarproducts from '../ViewSimilarproducts/ViewSimilarproducts.jsx'
const Product = ( ) => {
    const {HoverBeautyproducts} = useContext(ContextBeauty);
    const {ProductId} = useParams();
    const product = HoverBeautyproducts.find((item)=>{return item.id === parseInt(ProductId)});
    
    return (
        <div>
        <div className=''> 
           <Breadcrum product={product} />
        </div>

        <div className='Product-display-main-section'>
            <div className='product-left-side-section'>
              <ProductImage product={product}/>
            </div>

            <div className='product-right-side-section'>
                 <ProductInfo product={product}/>
            </div>
        </div>
             
         <div className='view-similar-similar-section'>
            <p>Similar Products</p>
         </div>   
             
         <ViewSimilarproducts />
              
              
        </div>
    );
}

export default Product;
