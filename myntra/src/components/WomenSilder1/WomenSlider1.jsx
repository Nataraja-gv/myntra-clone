import React, { useState ,useEffect} from 'react';
import './WomenSlider1.css';
import { GoDotFill } from "react-icons/go";
import { GoDot } from "react-icons/go";


const WomenSlider1 = ({womenImages}) => {
    const [womenimageindex,setWomenImageIndex]=useState(0)


    useEffect(()=>{
        const Interval=setInterval(()=>{
          setWomenImageIndex((index)=>{
            if(index===womenImages.length-1)return 0
            return index+1
          });
    
           
        },3000) 
    
        return()=>(clearInterval(Interval));
    
      },[womenImages.length])
    return (
        <div className='WomenImages-container'>
        <img src={womenImages[womenimageindex]} alt='' className='WomenImages'/>
            

            <div className='women-dispaly-index'>
              {womenImages.map((_,index)=>{

                return (<button className='women-index-btn' onClick={()=>setWomenImageIndex(index)}>{index===womenimageindex ?<GoDot  className='dotBtn'/>:<GoDotFill  className='DotFill'/>}</button>)
              })}
            </div>
        </div>
    );
}

export default WomenSlider1;
