import React, { useEffect, useState } from 'react';
import './carzy.css'
import { GoDotFill } from "react-icons/go";
import { GoDot } from "react-icons/go";
const Crazy = ({CrazyImages}) => {
  const [useimages ,setUseImages]=useState(0)

  useEffect(()=>{
    const Interval=setInterval(()=>{
      setUseImages((index)=>{
        if(index===0)return CrazyImages.length -1
        return index-1
      });

       
    },3000) 

    return()=>(clearInterval(Interval));

  },[CrazyImages.length])



    return (
        <div className='CrazyImages-container'>
        <img src={CrazyImages[useimages]} alt='' className='crazyImages'/>
            

            <div className='dispaly-index'>
              {CrazyImages.map((_,index)=>{

                return (<button className='index-btn' onClick={()=>setUseImages(index)}>{index===useimages ?<GoDot  className='dotBtn'/>:<GoDotFill  className='DotFill'/>}</button>)
              })}
            </div>
        </div>


    );
}

export default Crazy;
