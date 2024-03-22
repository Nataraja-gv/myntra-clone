import React from 'react';
import './styles/Men.css';
// import  menbanner from '../images/men1.png'
import Biggest from '../../components/MensFloder/BiggestDeals/Biggest.jsx';
import Categories  from '../../components/MensFloder/CATEGORIES/Categories.jsx';
import  MensSliderBarData from '../../components/MensSliderbar1/MensSliderBarData.jsx'
import Explore from '../../components/MensFloder/Explore/Explore.jsx'
import Luxe from '../../components/MensFloder/Luxe/Luxe.jsx'
import Trend from '../../components/MensFloder/Trend/Trend.jsx'
import  Indianwear from '../../components/MensFloder/INDIANWEAR/indianwear.jsx'  
import Footwear from '../../components/MensFloder/Footwear/Footwear.jsx' 
import Accessories from '../../components/MensFloder/ACCESSORIES/accessories.jsx'
import Footer from '../../components/Footer/Footer.jsx'


const Men = () => {
    return (
        <div className='Men-Myntra-Container'>
        {/* <div className='men-image'>
           <img src={menbanner} alt='' className='Men-image-image'/> 
           
        </div> */}
        <div className='Men-Slider-Container'>
          <MensSliderBarData/>
          </div>

          <div className='Biggest-deals'>
          <h1 className='h1'>BIGGEST DEALS ON TOP BRANDS</h1>
        </div>

        <div className='Biggest-deals-container'>
          <Biggest/>
        </div>

        <div className='CATEGORIES-deals'>
          <h1> CATEGORIES TO BAG</h1>
        </div>


        <div className='Category-deals-container'>
          <Categories/>
        </div>


        <div className='EXPLORE-deals'>
          <h1>EXPLORE TOP BRANDS</h1>
        </div>


        <div className='Explore-deals-container'>
          <Explore/>
        </div>


        <div className='LUXE-deals'>
          <h1>MYNTRA LUXE</h1>
        </div>


        <div className='Luxe-deals-container'>
          <Luxe/>
        </div>


        <div className='Trending-deals'>
          <h1>TRENDING IN SPORTS  WEAR</h1>
        </div>


        <div className='Trend-deals-container'>
          <Trend/>
        </div>


        <div className='Trending-deals'>
          <h1>TRENDING IN INDIAN WEAR</h1>
        </div>


        <div className='Indianwear-deals-container'>
          <Indianwear/>
        </div>


        <div className='Trending-deals'>
          <h1> TRENDING IN FOOTWEAR</h1>
        </div>


        <div className='Footerwear-deals-container'>
          <Footwear/>
        </div>


        <div className='Trending-deals'>
          <h1> TRENDING IN ACCESSORIES</h1>
        </div>

            
        <div className='Accressories-deals-container'>
          <Accessories/>
        </div>

        <div className='Footer-mens-Footer'>
          <Footer/>
        </div>
         
      </div>
    );
}

export default Men;
