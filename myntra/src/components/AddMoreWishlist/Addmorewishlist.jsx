import React, { useContext } from 'react';
import './Addmore.css';
import { Link } from "react-router-dom";

import { MdKeyboardArrowRight } from "react-icons/md";
import { AiOutlineFileAdd } from "react-icons/ai";
import { ThemeContext } from '../ThemeContext/Theme';
const Addmorewishlist = () => {
   const {theme}=useContext(ThemeContext)
    return (
       <Link to="/wishlist">  <div className='addmore-main-container' style={theme==="light"?{borderColor:""}:{borderColor:"black",backgroundColor:"#d6ccfe"}}>
          
           
          <div className='addmore-text'> 
          <span><AiOutlineFileAdd /></span>
          <p className='addmore-wishlist-txt'>Add More From Wishlist</p>
          </div>
           <div className='add-more-right-arrow'>
              <MdKeyboardArrowRight  />
           </div> 
        </div>
        </Link>
    );
}

export default Addmorewishlist;
