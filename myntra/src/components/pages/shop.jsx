import React, { useState } from 'react'
import './styles/shop.css';
import shop1 from '../images/shop1.png'
import coupan from '../images/coupons corner.png' 
import crazy from '../images/crazy.png'
import flat from '../images/flatoffer.png'
import { LuBellRing } from "react-icons/lu";
import Carzydata  from '../crazyDeals/Cdata.jsx';
import shopby from '../images/Shopby.png'
import ShopBy from '../ShopBy/ShopBy.jsx'
import MyntraApp from '../images/MyntraAppBanner.png'
import Footer from '../Footer/Footer.jsx'
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
// import Navigation from '../../components/Navbar/Navigation.jsx'
// import Navigation  from '../../components/Navbar/Navigation.jsx'

function Shop() {
   const[footerdropmenu,setFooterDropMenu]=useState(false)

  return (
    <div className='Shop-Myntra-Container'>
   
         
       

      <div className='Shop1-image'>
        <img src={shop1} alt='' className='shop1'/>
      </div>


      <div className='Shop2-coupan'>
        <img src={coupan} alt='' className='image-coupan'/>
      </div>

      <div className='Shop2-crazy'>
        <img src={crazy} alt='' className='image-crazy'/>
      </div>


      <div className='Shop2-flat'>
        <img src={flat} alt='' className='image-flat'/>
      </div>


      <div className='Shop2-flat'>
        <LuBellRing  title='latest offer'  className='bell-bell'/>
           
      </div>
       

      <div className=''>
        <Carzydata className="slider1"/>
      </div>

      <div className='shopby-container'>
        <img src={shopby} alt=""  className='shopby'/>
      </div>

      <div className=''>
        <ShopBy className="Shopby-in-Shop"/>
         
      </div> 


      <div className='MyntaApp-container'>
        <img src={MyntraApp} alt=""  className='MyntraApp'/>
      </div>

      <div className='Shop-More-about-myntra'>
      <ul> 
          <li className='drop-menu-list' onClick={()=>{setFooterDropMenu(!footerdropmenu)}}>More about Online Shopping at Myntra{!footerdropmenu?<MdKeyboardArrowDown  className='footerarrow'/>:<MdKeyboardArrowUp className='footerarrow'/>}</li>
          {footerdropmenu && <div><Footer/></div> } 
      </ul>    
      </div>       
 
      <div className='Footer'>
        <Footer/>
      </div>
       
       
    </div>
  )
}

export default Shop;
