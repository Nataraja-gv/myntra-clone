import React from 'react';
import c1 from './c1.png'
import c2 from './c2.png'
import Crazy  from './CrazySlide.jsx'


const crazyImg=[c1,c2];


const Carzydata = () => {
    return (
        <div className='Cimage-Cimage'>
            <Crazy CrazyImages={crazyImg} />
        </div>
    );
}

export default Carzydata;
