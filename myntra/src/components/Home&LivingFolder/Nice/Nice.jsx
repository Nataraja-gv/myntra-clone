import React, { useContext } from 'react';
import './Nice.css'
import NiceImageContent from './NiceData.jsx'
import { ThemeContext } from '../../ThemeContext/Theme.jsx';

const Nice = () => {
   const {theme} =useContext(ThemeContext)

    return (
        <div className='Nice-main-container'>
        <div className='Nice-Divide-container'>
            <div className='Nice-LeftSide'>
               <div className='Nice-heading'>
                  <header style={theme==="light"?{color:"rgb(62, 65, 82)"}:{color:"white"}}>NICE TO SEE YOU, COME ON IN!</header>
               </div>
               <div className='Nice-Images-container'>

               <div className='Nice-Images-Items'>

{  NiceImageContent.map((item,index)=>{
  return(
      <div className=' '>
          <div className='Image-Image-Nice' key={index}>
               <img src={item.Image} alt="" className='Img-Nice-img' />
               <p className='description'>{item.description}</p>

          </div>
      </div>
  )
})}
</div>
                 
               </div>

            </div>

            <div className='Nice-RightSide'>


              <p>Furnishings & Bed Linen</p>
              <p>Bed Sheets</p>
              <p>Bedding Sets & Bed Covers</p>
              <p>Blankets,Quilts & Dohars</p>
              <p>Pillows & Pillow Covers</p>
              <p>Cushions & Cushion Covers</p>
              <p>Curtains</p>
              <p>Mats & Dhurries</p>
              <p>Carpets</p>
              <p>Bath & Bed Linen</p>
              <p>Towels & Towel Sets</p>
               <p>Bath Rugs</p>
                  <p>Bathroom Accessories</p>
                  <p>Shower Curtains</p>
                  <p>Bath Rugs</p>
                  <p>Home Decor</p>
                  <p>Pooja Essentials</p>
                  <p>Laptop Table</p>
                  <p>Ottomans</p>
                  <p>Artifial Flowers & Plants</p>
                  <p>Candles & Candle Holders</p>
                  <p>Clocks</p>
                  <p>Planters & Garden Accessories</p>
                  <p>Home Fragrances</p>
                  <p>Mirrors</p>
                  <p>Wall Art</p>
                  <p>Wall Decor</p>
                  <p>Wall Shelves</p>
                  <p>Showpieces & Vases</p>
                  <p>Lamps & Lighting</p>
                  <p>Floor Lamps</p>
                  <p>Table Lamps</p>
                   <p>Wall Lamp & String Lights</p>
                   <p>Bathroom Lights & Outdoor Lamps</p>
                   <p>Ceiling Lamps</p>
                   <p>Kitchen & Table</p>
                   <p>Dinnerware</p>
                   <p>Cups & Mugs</p>
                   <p>Water Bottles</p>
                   <p>Bakeware</p>
                   <p>Trays & Serveware</p>
                   <p>Bar & Drinkware</p>
                   <p>Cookware & Kitchen Tools</p>
                   <p>Kitchen Storage</p>
                   <p>Table Covers & Furnishings</p>
                   <p>Storage & Organisers</p>
                   <p>Organisers</p>
                   <p>Hooks & Holders</p>

            </div>
        </div>
            
        </div>
    );
}

export default Nice;
