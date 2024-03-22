import React from 'react';
import kid1 from './kid1.png'
import kid2 from './kid2.png'
import kid3 from './kid3.png'
import kid4 from './kid4.png'
import kid5 from './kid5.png'
import KidSlider from '../kidSlider/KidSlider.jsx'


const images=[kid1,kid2,kid3,kid4,kid5]


const KidSliderdata = () => {
    return (
        <div>
            <KidSlider KidImage={images}/>
        </div>
    );
}

export default KidSliderdata;
