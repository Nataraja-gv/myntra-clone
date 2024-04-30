import React from 'react';
import { ShimmerThumbnail } from "react-shimmer-effects";

const Shimmer = () => {
    return (
        <div className='shimmer-main-conatainer'>
           <div className='shimmer-left-container'>
           <ShimmerThumbnail height={250} rounded />;
           <ShimmerThumbnail height={250} rounded />;
           <ShimmerThumbnail height={250} rounded />;
           <ShimmerThumbnail height={250} rounded />;
            </div>

           <div className='shimmer-right-container'>

           </div>
            
        </div>
    );
}

export default Shimmer;
