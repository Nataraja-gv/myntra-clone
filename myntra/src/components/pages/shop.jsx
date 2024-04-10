import React, { useState } from 'react'
import './styles/shop.css';
import shop1 from '../images/shop1.png'
 import Coupan from '../Coupans/Coupan.jsx' 
 import flat from '../images/flatoffer.png'
import { LuBellRing } from "react-icons/lu";
import ShopBy from '../ShopBy/ShopBy.jsx'
import MyntraApp from '../images/MyntraAppBanner.png'
import Footer from '../Footer/Footer.jsx'
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import Crazy from '../crazyDeals/CrazySlide.jsx'

function Shop() {
   const[footerdropmenu,setFooterDropMenu]=useState(false)

  return (
    <div className='Shop-Myntra-Container'>

       <div className='Shop1-image'>
        <img src={shop1} alt='' className='shop1'/>
      </div>

      <div className=''>
        <Coupan/>
      </div>

      <div className='heading-bold'>
          <h1 className='h1'>BIGGEST DEALS ON TOP BRANDS</h1>
      </div>

     <div className=''>
        <Crazy/>
     </div>


    <div className='Shop2-flat'>
        <img src={flat} alt='' className='image-flat'/>
    </div>


    <div className='Shop2-flat'>

        <LuBellRing  title='latest offer'  className='bell-bell'/>
           
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
 
      
       
      <Footer className='Footer'/>
    </div>
    
  )
}

export default Shop;
