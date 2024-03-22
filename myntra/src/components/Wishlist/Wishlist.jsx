import React from 'react';
import './Wishlist.css'
import wishimg1 from './wishlist.png'
import Footer from '../../components/Footer/Footer.jsx'
import { Outlet,Link } from "react-router-dom";

const Wishlist = () => {
    return (
        <div className='section-wishlist-section'>
        <div className='Wishlist-main-container'>
           <div class="wishlistLogin-heading">PLEASE LOG IN</div>
           <div class="wishlistLogin-info">Login to view items in your wishlist.</div>
           <div class="wishlist-images"><img src={wishimg1} alt="" /> </div>
           <div className='wishlist-login'><Link to ="/login" className="wishlistLogin-button">LOGIN</Link></div>



            
            
        </div>

        <div className='Footer'>
            <Footer/>
        </div>
        </div>

         
    );
}

export default Wishlist;
