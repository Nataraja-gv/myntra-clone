import React from 'react';
import './styles/Kid.css';
import KidSliderdata from '../../components/kidSlider/KidSliderdata.jsx'
import FBrands from '../../components/KidFolder/FavoriteBrands/FBrands.jsx'
import TopPicks from '../../components/KidFolder/TopPicks/TopPicks.jsx'
import Iconic from '../../components/KidFolder/Iconic/Iconic.jsx'
import Fashion from '../../components/KidFolder/Fashion&/Fashion.jsx'
import Explore from  '../../components/KidFolder/exploreMore/Explore.jsx'
import Space from '../../components/KidFolder/Space/Space.jsx'
import Budget from '../../components/KidFolder/Budget/Budget.jsx'
import Brand from '../../components/KidFolder/Brand/Brand.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import './styles/heading.css'



const Kid = () => {
    return (
        <div className='kid-main-container'>
        
        <div className='Kid-deals-Slider'>
        <KidSliderdata/>
        </div>
         

        <div className='heading-bold '>
          <h1 className='h1' style={{marginLeft:"130px"}}>FAVOURITE BRANDS</h1>
        </div>

        <div className='Kid-Favourite-deals-Slider'>
        <FBrands/>
        </div>

        <div className='heading-bold'>
          <h1 className='h1' style={{marginLeft:"130px"}}>TOP PICKS</h1>
        </div>


        <div className='Kid-TopPicks-deals-Slider'>
        <TopPicks/>
        </div>

        <div className='heading-bold'>
          <h1 className='h1' style={{marginLeft:"130px"}}>ICONIC BRANDS</h1>
        </div>


        <div className='Kid-Iconic-deals-Slider'>
        <Iconic/>
        </div>

        <div className='heading-bold'>
          <h1 className='h1' style={{marginLeft:"130px" ,marginTop:"70px"}}>FASHION & ESSENTIALS</h1>
        </div>

        <div className='Kid-Fashion-deals-Slider'>
        <Fashion/>
        </div>


        <div className='heading-bold'>
          <h1 className='h1'style={{marginLeft:"130px"}}>EXPLORE MORE</h1>
        </div>

        <div className='Kid-Fashion-deals-Slider'>
        <Explore/>
        </div>

        <div className='heading-bold'>
          <h1 className='h1'style={{marginLeft:"130px"}}> THE KIDS SPACE</h1>
        </div>

        <div className='Kid-Fashion-deals-Slider'>
        <Space/>
        </div>

        <div className='heading-bold'>
          <h1 className='h1' style={{marginLeft:"130px"}}>BUDGET BUY</h1>
        </div>


        <div className='Kid-Fashion-deals-Slider'>
        <Budget/>
        </div>


        <div className=' heading-bold'>
          <h1 className='h1' style={{marginLeft:"130px"}}>SHOP MORE BRANDS</h1>
        </div>
   

        <div className='Kid-Fashion-deals-Slider'>
        <Brand/>
        </div>


        <div className='Kid-footer-footer'>
        <Footer/>
        </div>




       </div>
    );
}

export default Kid;
