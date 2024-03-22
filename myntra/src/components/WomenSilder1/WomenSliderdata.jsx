import React from 'react';
import women1 from './women1.png'
import women2 from './women2.png'
import women3 from './women3.png'
import women4 from './women4.png'
import women5 from './women5.png'
import women6 from './women6.png'
import women7 from './women7.png'
import women8 from './women8.png'
import women9 from './women9.png'
import women10 from './women10.png'
import women11 from './women11.png'
import women12 from './women12.png'
import WomenSlider1 from '../../components/WomenSilder1/WomenSlider1.jsx'
const Images=[women1, women2, women3, women4, women5, women6, women7, women8, women9, women10, women11, women12]

const WomenSliderdata = () => {
    return (
        <div>

    <WomenSlider1 womenImages={Images}/>
            
        </div>
    );
}

export default WomenSliderdata;
