import React, { useContext } from 'react';
import './styles/Men.css';
 import './styles/heading.css'
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
import Holi from '../../components/Holi/Holi.jsx'
import Puma from '../../components/Puma/Puma.jsx'
import HoverBeauty from '../HoverComponent/HoverBeauty.jsx'
import { ThemeContext } from '../ThemeContext/Theme.jsx';

const Men = () => {
  const {theme} =useContext(ThemeContext)

    return (
        <div className='Men-Myntra-Container'>
         
        <div className='Men-Slider-Container'>
          <MensSliderBarData/>
          </div>

          <div className='heading-bold'>
          <h1 className='h1' style={theme==="light"?{color:"rgb(62, 65, 82)"}:{color:"white"}}>BIGGEST DEALS ON TOP BRANDS</h1>
        </div>

        <div className='Biggest-deals-container'>
          <Biggest/>
        </div>

        <div className='heading-bold '>
          <h1 style={theme==="light"?{color:"rgb(62, 65, 82)"}:{color:"white"}}> CATEGORIES TO BAG</h1>
        </div>


        <div className='Category-deals-container'>
          <Categories/>
        </div>


        <div className='heading-bold'>
          <h1 style={theme==="light"?{color:"rgb(62, 65, 82)"}:{color:"white"}}>EXPLORE TOP BRANDS</h1>
        </div>


        <div className='Explore-deals-container'>
          <Explore/>
        </div>


        <div className='heading-bold'>
          <h1 style={theme==="light"?{color:"rgb(62, 65, 82)"}:{color:"white"}}>MYNTRA LUXE</h1>
        </div>


        <div className='Luxe-deals-container'>
          <Luxe/>
        </div>


        <div className='heading-bold'>
          <h1 style={theme==="light"?{color:"rgb(62, 65, 82)"}:{color:"white"}}>TRENDING IN SPORTS  WEAR</h1>
        </div>


        <div className='Trend-deals-container'>
          <Trend/>
        </div>


        <div className='heading-bold'>
          <h1 style={theme==="light"?{color:"rgb(62, 65, 82)"}:{color:"white"}}>TRENDING IN INDIAN WEAR</h1>
        </div>


        <div className='Indianwear-deals-container'>
          <Indianwear/>
        </div>


        <div className='heading-bold'>
          <h1 style={theme==="light"?{color:"rgb(62, 65, 82)"}:{color:"white"}}> TRENDING IN FOOTWEAR</h1>
        </div>


        <div className='Footerwear-deals-container'>
          <Footwear/>
        </div>


        <div className='heading-bold'>
          <h1 style={theme==="light"?{color:"rgb(62, 65, 82)"}:{color:"white"}}> TRENDING IN ACCESSORIES</h1>
        </div>

            
        <div className='Accressories-deals-container'>
          <Accessories/>
        </div>

        <div className='Holi-deals-container'>
          <Holi/>
        </div>

        <div className='Puma-deals-container'>
          <Puma/>
        </div>

       

        <div className='Footer-mens-Footer'>
          <Footer/>
        </div>
         
      </div>
    );
}

export default Men;
