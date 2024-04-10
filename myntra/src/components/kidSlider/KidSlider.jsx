import React, { useState ,useEffect} from 'react';
import {GoDotFill} from "react-icons/go";
import {GoDot} from "react-icons/go";
import './KidSlider.css'


const KidSlider = ({KidImage}) => {

const [kidimageIndex,setKidImageIndex]=useState(0)

useEffect(()=>{
    const Interval=setInterval(()=>{
      setKidImageIndex((index)=>{
        if(index===KidImage.length-1)return 0
        return index+1
      });

       
    },3000) 

    return()=>(clearInterval(Interval));

  },[KidImage.length])

    return (
        <div className='KidImages-container'>
        <img src={KidImage[kidimageIndex]} alt='' className='KidImages'/>
            

            <div className='Kid-dispaly-index'>
              {KidImage.map((_,index)=>{

                return (<button className='Kid-index-btn' onClick={()=>setKidImageIndex(index)}>{index===kidimageIndex ?<GoDot  className='dotBtn'/>:<GoDotFill  className='DotFill'/>}</button>)
              })}
            </div>
        </div>
    );
}

export default KidSlider;
