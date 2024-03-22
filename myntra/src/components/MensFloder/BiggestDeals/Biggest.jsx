import React from 'react';
import './Biggest.css';
import big1 from './big1.png'
import big12 from './big12.png'
import big13 from './big13.png'
import big14 from './big14.png'
import big21 from './big21.png'
import big22 from './big22.png'
import big23 from './big23.png'
import big24 from './big24.png'
import big31 from './big31.png'
import big32 from './big32.png'
import big33 from './big33.png'
import big34 from './big34.png'
import big41 from './big41.png'
import big42 from './big42.png'
import big43 from './big43.png'
import big44 from './big44.png'


// import BiggestImages from  './Biggestdata'

const Biggest = () => {
    return (
        <div className='BiggestImage-container'>

        <div className='Biggest-Items'> 
         <div className='Biggest-Items-section-1'>

            <img src={big1} alt="" className='img-b1'/>
            <img src={big12} alt="" className='img-b12'/>
            <img src={big13} alt="" className='img-b13'/>
            <img src={big14} alt="" className='img-b14'/>
   
</div>

<div className='Biggest-Items-section-2'>

<img src={big21} alt="" className='img-b21'/>
<img src={big22} alt="" className='img-b22'/>
<img src={big23} alt="" className='img-b23'/>
<img src={big24} alt="" className='img-b24'/>

</div>


<div className='Biggest-Items-section-3'>

<img src={big31} alt="" className='img-b31'/>
<img src={big32} alt="" className='img-b32'/>
<img src={big33} alt="" className='img-b33'/>
<img src={big34} alt="" className='img-b34'/>

</div>


<div className='Biggest-Items-section-4'>

<img src={big41} alt="" className='img-b41'/>
<img src={big42} alt="" className='img-b42'/>
<img src={big43} alt="" className='img-b43'/>
<img src={big44} alt="" className='img-b44'/>

</div>
    
        </div>
    </div>
    );
}

export default Biggest;
