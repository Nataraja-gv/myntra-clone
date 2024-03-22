import React from 'react';
import './styles/Women.css'
// import womenbanner from '../images/women1.png'
import WBiggest from '../../components/WomenFolder/BiggestDeals/WBiggest.jsx'
import WCategories from '../WomenFolder/CATEGORIES/WCategories.jsx';
 import WomenSliderdata from '../../components/WomenSilder1/WomenSliderdata.jsx'
import WExplore from '../../components/WomenFolder/Explore/WExplore.jsx';
import TrendWestern from '../../components/WomenFolder/TrendWestern/TrendWestern.jsx'
import WIndianwear from '../../components/WomenFolder/indianwear/Windianwear.jsx'
import WsportsTrend from '../../components/WomenFolder/Wsportswear/Wsportswear.jsx' 
 import   WFootwear from '../../components/WomenFolder/WomenFootwear/WFootwear.jsx'
import WAccessories from '../../components/WomenFolder/WACCESSORIES/Waccessories.jsx'
import Footer from  '../../components/Footer/Footer.jsx'



 const Women = () => {
    return (
        <div className='Women-Myntra-Container'>
        {/* <div className='Women-image'>
          <img src={womenbanner} alt='' className='Women-image-image'/>
        </div> */}
        <div className='Women-sider-conatiner'>
        <WomenSliderdata/>
        </div>

        <div className='Biggest-deals'>
          <h1>BIGGEST DEALS ON TOP BRANDS</h1>
        </div>

        <div className='WBiggest-deals-container'>
          <WBiggest/>
        </div>


        <div className='WCATEGORIES-deals'>
          <h1> CATEGORIES TO BAG</h1>
        </div>

        <div className='WCategories-deals-container'>
          <WCategories/>
        </div>

        <div className='WEXPLORE-deals'>
          <h1>EXPLORE TOP BRANDS</h1>
        </div>


        <div className='WExplore-deals-container'>
          <WExplore/>
        </div>

        <div className='WESTERN-WEAR'>
          <h1>TRENDING IN WESTERN WEAR</h1>
        </div>

        <div className='Western-deals-container'>
          <TrendWestern/>
        </div>

        <div className='WTrending-deals'>
          <h1>TRENDING IN INDIAN WEAR</h1>
        </div>

          
        <div className='WomenIndian-deals-container'>
          <WIndianwear/>
        </div>   


        <div className='TrendSports-deals'>
          <h1>TRENDING IN SPORTS  WEAR</h1>
        </div>


        <div className='WomenSports-deals-container'>
          <WsportsTrend/>
        </div>  

        <div className='WomenFootwear-deals'>
          <h1> TRENDING IN FOOTWEAR</h1>
        </div>



        <div className='WomenFootwear-deals-container'>
          <WFootwear/>
        </div> 


        <div className='WomenAccessories-deals'>
          <h1> TRENDING IN ACCESSORIES</h1>
        </div>


        <div className='WomenAccressories-deals-container'>
          <WAccessories/>
        </div>

        <div className='Footer-Women-Footer'>
          <Footer/>
        </div>
        
          
      </div>
    );
}

export default Women;
