import React, { useContext } from 'react';
import './Puma.css';
import PumaData from './PumaData'
import Item from '../ITEM/Item.jsx'
import { ThemeContext } from '../ThemeContext/Theme.jsx';


const Puma = () => {
   const {theme} =useContext(ThemeContext)

    return (
        <div className='Puma-main-container'>
          <div className='heading-bold'>
          <h1 className='h1' style={theme==="light"?{color:"rgb(62, 65, 82)"}:{color:"white"}}>TRENDING IN PUMA</h1>
          </div>

           <div className='mynta-Puma-image-section'>
           {PumaData.map((item,index)=>{
            return <Item key={index} image={item.Image}/>})
           }
           </div> 

        </div>
    );
}

export default Puma;
