import React, { useState } from 'react';
import './styles/Beauty.css'
// import FilterSection from '../../components/BeautyFolder/FilterSection.jsx'
// import { MdOutlineKeyboardArrowDown } from "react-icons/md";
// import { MdOutlineKeyboardArrowUp } from "react-icons/md";
// import Beautydisplay from '../../components/BeautyFolder/Beautydisplay/Beautydisplay.jsx'
import Footer from '../../components/Footer/Footer.jsx'
 
import FullbeautyFilter from '../../components/BeautyFolder/FullDisplayaddress/FullbeautyFilter.jsx'
const Beauty = () => {

  // const [arrowOpen ,setArrowOpen]=useState(false);
  // const[countryOpen,setCountryOpen]=useState(false);
  // // const [close ,setClose]=useState(false);
  // const[sizeopen,setSizeOpen]=useState(false);

    return (
        <div className='Beauty-Main-conatiner'>
       
          {/* <div className='Beauty-Main-firstcontainer'>
              <div className='first-left-side1'>
                <p>Home  / <span>Personal Care</span> </p>
                
                 
              </div>
              <div className='first-left-side2'>
                
                
                <p><span>Personal Care</span>- 98500 items </p>
              </div>
             
          </div>

          <div className='filter-sort-container'>
             <div className='Filter-title'>
                <p>FILTERS</p>
             </div>

             <div className='Filter-dropmenu'>
                <div className='Bundles-content'>
                <button className='Bundles-btn' onClick={()=>setArrowOpen(arrow=>!arrow)}>Bundles {!arrowOpen ? <MdOutlineKeyboardArrowDown className='arrowDown' />:<MdOutlineKeyboardArrowUp className='arrowUp'/>}</button>
                 {arrowOpen &&<div class="dropdown-Bundles">
                    <div className='checkbox1'>
                      <input type="checkbox"  className='checkbox' name="Bundles"/><label>Bundles</label> 
                    </div>

                    <div className='checkbox1'>
                      <input type="checkbox" className='checkbox' name="Single-Style"/> <label>Single Style</label>
                    </div>
                   </div>}
                </div>

                <div className='Country-content'>
                <button class="Country-btn" onClick={()=>setCountryOpen(props=>!props)}>Country of Origin{!countryOpen ? <MdOutlineKeyboardArrowDown className='arrowDown' />:<MdOutlineKeyboardArrowUp className='arrowUp'/>}</button> 
                {countryOpen &&<div class="dropdown-Country">
                    <div className='checkbox2'>
                      <input type="checkbox" className='checkbox' name="Bundles"/>All Countries
                    </div>

                    <div className='checkbox2'>
                      <input type="checkbox" className='checkbox' name="Single-Style"/>India
                    </div>
                   </div>}
            
                </div>

                <div className='Size-content'>
                <button class="Size-btn" onClick={()=>setSizeOpen(arrow=>!arrow)}>Size{!sizeopen?<MdOutlineKeyboardArrowDown className='arrowDown' />:<MdOutlineKeyboardArrowUp className='arrowUp'/>}</button>
                {sizeopen &&<div class="dropdown-Size">
                    <div className='checkbox3'>
                      <input type="checkbox" className='checkbox'name="Bundles"/>S
                    </div>

                    <div className='checkbox3'>
                      <input type="checkbox"  className='checkbox'name="Single-Style"/>M
                    </div>

                    <div className='checkbox3'>
                      <input type="checkbox" className='checkbox'name="Bundles"/>L
                    </div>

                    <div className='checkbox3'>
                      <input type="checkbox"  className='checkbox'name="Single-Style"/>XL
                    </div>



                    <div className='checkbox1'>
                      <input type="checkbox"  className='checkbox'name="Single-Style"/>XXL
                    </div>

                    <div className='checkbox1'>
                      <input type="checkbox"  className='checkbox'name="Single-Style"/>XXXL
                    </div>

                    <div className='checkbox1'>
                      <input type="checkbox"  className='checkbox'name="Single-Style"/>XS
                    </div>

                    <div className='checkbox1'>
                      <input type="checkbox"  className='checkbox'name="Single-Style"/>XM
                    </div>
                   </div>}
                </div>
             </div>


             <div className='ShopCatagory-sort'>
         <form>
           
          <select  name="filter" id="name">
             
            <option value="Recommended"><span>Sort By:</span>Recommended</option>
            <option value="Whats news">Whats news</option>
            <option value="Popularity">Popularity</option>
            <option value="price">Price:Low to high</option>
            <option value="price">Price: high t0 low</option>
          </select>
         </form>

       </div>  */}
          {/* </div> */}

        
        

        {/* <div className='Beauty-Main-Secondcontainer'>
        <div className='Filter-beauty-container-grid '>
        <FilterSection/>
        
        </div>
           
          <div className='beauty-display-display-grid '> 
        <Beautydisplay />

        </div>
         </div> */}
       <div className='Fullbeauty-filter-section-in-beauty'>
        <FullbeautyFilter/>
       </div>  
        

       <div className='Beauty-footer'>
        <Footer/>
       </div>
</div>

    );
}

export default Beauty;
