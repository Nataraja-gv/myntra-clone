import React from 'react';
import CategoriesImage from './Categoriesdata.jsx';
import { Link } from 'react-router-dom';
import './Categories.css';
import ItemCategory from '../../ItemCategory/ItemCategory.jsx'

const Categories = (props) => {
     
    return (
       
        <div className='category-image-container'>
            <div className='Category-Items'>
             
  { CategoriesImage.map((item,index)=>{
  return<ItemCategory key={index} Image={item.Image} />
      
  
})}
 
</div>
        </div>
         
    );
}

export default Categories;
