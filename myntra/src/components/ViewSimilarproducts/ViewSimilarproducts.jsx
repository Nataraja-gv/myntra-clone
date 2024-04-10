import React, { useContext, useState } from 'react'
import './ViewSimilar.css'
import { ContextBeauty } from '../Context/Context.jsx'
import Releted from '../Releted/Releted'
 
 

export default function ViewSimilarproducts(props) {
   const {HoverBeautyproducts}=useContext(ContextBeauty)
    
    
  return (
    <div className='view-releted-products-container'>
        
        {HoverBeautyproducts.map((item,index)=>{
           
           
           return <Releted key={index} Image={item.Image} rating={item.rating} greenstar={item.greenstar} Title={item.Title} Description={item.Discription} Namount={item.Namount} Oamount={item.Oamount} offer={item.offer}/>
          
          
       })}

 
    </div>
  )
}
