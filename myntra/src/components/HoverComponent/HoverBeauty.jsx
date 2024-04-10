import React, { useContext } from 'react';
import './HoverBeauty.css'
// import Beautyproducts from '../BeautyFolder/BeautyProducts/BeautyProducts.jsx'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { CiHeart } from "react-icons/ci";
import { Link } from "react-router-dom";
import { ContextBeauty } from '../Context/Context';

const HoverBeauty = (props) => {

    const {addtoWishlist} = useContext(ContextBeauty)
    const responsive = {
       desktop: {
          breakpoint: { max: 3000, min: 1000 },
          items: 1,
          },
        
      };

//  const [productId,setProductId]     


    return (
        <div className='HoverBeauty-main-container' >
            <div className='hover-conatiner'>
                     <div className='Image-container'>
                     <Link to ={`/Product/${props.id}`}>
                     <Carousel responsive={responsive} customDot={<CustomDot/>} customTransition="all .5ms ease in" keyBoardControl={true}  renderDotsOutside={true} containerClass="carousel-container"  infinite={true} showDots={true} autoPlay={true}  dotListClass={'react-multi-carousel-dot-list custom-dot-list-style'}  autoPlaySpeed={1000}  itemClass="carousel-item-padding-40-px itemimage" removeArrowOnDeviceType={["desktop"]}>
                     <div> <img src={props.Image} alt='' style={{width:"228px",height:"250px"}}/></div>
                         <div>  <img src={props.Image2} alt=''  style={{width:"228px",height:"250px"}}/></div>
                         <div>  <img src={props.Image3} alt=''  style={{width:"228px",height:"250px"}}/></div>
                       


                    </Carousel>
                    </Link>
                     </div>
                     <div className='hover-beauty-deatils'>

                        <ul className='wishlist-container'>
                        <li><CiHeart className='heart-beauty' /></li> 
                        <li   className='wishlist' onClick={()=>{addtoWishlist(props.id)}}>WISHLIST</li>
                        </ul>

                         <ul className='hover-size-section'> 
                        <li>{props.Size}</li>
                        </ul>

                         <ul className='hover-price-offer'>
                            <li className='hover-newprice' style={{fontSize:"14px"}}>{props.newAmount}</li>
                            <li className='hover-oldprice' style={{fontSize:"12px"}}>{props.oldAmount}</li>   
                            <li className='hover-offer' style={{fontSize:"14px"}}>{props.offer}</li>
                        </ul>
                     </div>
                </div>
            
            
            
        </div>
    );
}


 export const CustomDot = ({ active }) => (
  <button
    className={`custom-dot${ active ? ' active' : ''}`}
     
  />
);


export default HoverBeauty;
