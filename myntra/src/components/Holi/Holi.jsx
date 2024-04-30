import React, { useContext } from 'react';
import './Holi.css'
import HoliData from './HoliData.jsx'
import Item from '../ITEM/Item.jsx' ;
import { ThemeContext } from '../ThemeContext/Theme.jsx';

const Holi = () => {
   const {theme} =useContext(ThemeContext)
    
    return (
        <div className='Holi-main-container'>
          <div className='heading-bold'>
          <h1 className='h1' style={theme==="light"?{color:"rgb(62, 65, 82)"}:{color:"white"}}> MYNTRA HOLI</h1>
          </div>

           <div className='mynta-holi-image-section'>
           {HoliData.map((item,index)=>{
            return <Item key={index} image={item.Image}/>})
           }
           </div> 

        </div>
    );
}

export default Holi;
