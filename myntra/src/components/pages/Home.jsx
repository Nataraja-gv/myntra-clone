import React from 'react';
import './styles/Home.css';
import Home1 from '../../components/Home&LivingFolder/Home1/Home1.jsx'
import  Nice from '../../components/Home&LivingFolder/Nice/Nice.jsx'
import  Get from '../../components/Home&LivingFolder/getInspired/Get.jsx'
import FBrands from '../../components/Home&LivingFolder/featureBrands/FBrands.jsx'
import Footer from '../../components/Footer/Footer.jsx'

const Home = () => {
    return (
        <div className='Home-main-conatiner'>
           <div className='Firstimage-conatiner'>
             <Home1/>
           </div>

           <div className='Nice-image-conatiner'>
             <Nice/>
           </div>

           <div className='Get-image-conatiner'>
             <Get/>
           </div>

           <div className='featured-Brands-conatiner'>
            <p>featured Brands</p>
           </div>


           <div className='Fbrand-image-conatiner'>
             <FBrands/>
           </div>

           <div className='Footer-Home-conatiner'>
             <Footer/>
           </div>
            
        </div>
    );
}

export default Home;
