import React from 'react';
import men1 from './men1.png'
import men2 from './men2.png'
import men3 from './men3.png'
import men4 from './men4.png'
import men5 from './men5.png'
import men6 from './men6.png'
import MensSliderbar1 from '../MensSliderbar1/MensSliderbar1.jsx';

const images=[men1,men2,men3,men4,men5,men6]

const MensSliderBarData = () => {
    return (
        <div>
        <MensSliderbar1 SliderImages={images}/>
            
        </div>
    );
}

export default MensSliderBarData;
