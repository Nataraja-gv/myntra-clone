import React from 'react';
import CategoriesImage from './Categoriesdata.jsx';
import { Link } from 'react-router-dom';
import './Categories.css';



const Categories = (props) => {
    console.log("hello world")
    return (
        <div className='category-image-container'>
            <div className='Category-Items'>

{ CategoriesImage.map((item,index)=>{
  return(
      <div className=' '>
          <div className='Image-Image-category' key={index} >
           
         <Link to = {`/Men/${props.category}`}>    <img src={item.Image} alt="" className='Img-category-img' /></Link>  
                
          </div>
      </div>
  )
})}
</div>
        </div>
    );
}

export default Categories;
