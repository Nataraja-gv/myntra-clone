import React from 'react';
import './Breadcrum.css';

const Breadcrum = ({product}) => {
     
     
    return (
        <div className='Breadcrum-container'>

        <a href=''>Home</a> / <a href=''>Personal Care</a> / <a href=''>Daily Products</a> / <a href=''><strong>{product.Title} /</strong></a>  <a href=''><strong>{product.Discription} </strong></a>     / <a href=''><strong>By More   </strong> </a>  
        </div> 
    );
}

export default Breadcrum;
