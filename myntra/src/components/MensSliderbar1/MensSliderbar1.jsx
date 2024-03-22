import React, { useState ,useEffect} from 'react';
import { GoDotFill } from "react-icons/go";
import { GoDot } from "react-icons/go";
import './MensSliderBar1.css'
const MensSliderbar1 = ({SliderImages}) => {

    const [imageindex,setImageIndex]=useState(0)

    useEffect(()=>{
        const Interval=setInterval(()=>{
          setImageIndex((index)=>{
            if(index===0)return SliderImages.length -1
            return index-1
          });
    
           
        },3000) 
    
        return()=>(clearInterval(Interval));
    
      },[imageindex.length])
    
    return (
        <div className='MensImages-container'>
        <img src={SliderImages[imageindex]} alt='' className='MensImages'/>
            

            <div className='mens-dispaly-index'>
              {SliderImages.map((_,index)=>{

                return (<button className='mens-index-btn' onClick={()=>setImageIndex(index)}>{index===imageindex ?<GoDot  className='dotBtn'/>:<GoDotFill  className='DotFill'/>}</button>)
              })}
            </div>
        </div>

    );
}

export default MensSliderbar1;
