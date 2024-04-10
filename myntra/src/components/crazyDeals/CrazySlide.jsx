import React  from 'react';
import './carzy.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import crazyImg from './Cdata' 


 const Crazy = () => {
  const responsive = {
     
    desktop: {
      breakpoint: { max: 3000, min: 1000 },
      items: 6,
      slidesToSlide: 6,
      
      
    },
    
  };
  
   
    
 
 return (
        <div className='CrazyImages-container'>
             <Carousel responsive={responsive}   infinite={true} showDots={true} autoPlay={true}   autoPlaySpeed={2000} dotListClass="custom-dot-list-style index" itemClass="carousel-item-padding-40-px itemimage">
               {crazyImg.map((item,index)=>{
                return(
                <img key={index} src={item.Image} alt='' className='crazy-carousel-images'/>
                )
               })}
             </Carousel>
        
        </div>


    );
}

export default Crazy;
