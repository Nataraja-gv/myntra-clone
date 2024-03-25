import React, { useState } from 'react';
import './FullBeautyFilter.css'
import { IoIosArrowForward } from "react-icons/io";
import Beautyproducts from '../BeautyProducts/BeautyProducts.jsx';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { MdCancel } from "react-icons/md";
// import './Media.css'


const FullbeautyFilter = () => {

    const [arrowOpen ,setArrowOpen]=useState(false);
    const[countryOpen,setCountryOpen]=useState(false);
    // const [close ,setClose]=useState(false);
    const[sizeopen,setSizeOpen]=useState(false);
    const[opensearch,setOpenSearch]=useState(false);
    const[openBrandsearch,setOpenBrandSearch]=useState(false);
    const[openColorsearch,setOpenColorSearch]=useState(false);


    const BundlesHandler=()=>{
        setArrowOpen(!arrowOpen)
        if (countryOpen){
          setCountryOpen(false)
        }
        if(sizeopen){
          setSizeOpen(false)
        } 
    }


    const CountryHandler =()=>{
      setCountryOpen(!countryOpen)
      if (arrowOpen){
        setArrowOpen(false)
      }

      if(sizeopen){
        setSizeOpen(false)
      } 
    }


     const SizeHandler=()=>{
      setSizeOpen(!sizeopen)
      if (arrowOpen){
        setArrowOpen(false)
      }

      if (countryOpen){
        setCountryOpen(false)
      }
     }




    return (
     <div className='Full-beauty-filter-section'>   


     <div className='Beauty-Main-firstcontainer'>
              <div className='first-left-side1'>
                <p>Home  / <span>Personal Care</span> </p>
                
                 
              </div>
              <div className='first-left-side2'>
                
                
                <p><span>Personal Care</span>- 98500 items </p>
              </div>
             
          </div>

          
             
{/* second section */}
        <div className='Filterimage-Conatiner'>

         
            <div className='FilterSection' >
              <div className='Filter-title'>
                <p>FILTERS</p>
             </div>
              <div className='vertical-filter-section'>
                <ul className='gender-list'>
                   <li>
                       <input type="radio" value="men,men women" name="gender"/>
                       <label for="men">Men</label>
                           
                   </li>


                   <li>
                       <input type="radio" value="men,men women" name="gender"/>
                       <label for="men">Women</label>
                           
                   </li>

                  
                   <li>
                       <input type="radio" value="men,men women" name="gender"/>
                       <label for="men">Boys</label>
                           
                   </li>

                   <li>
                       <input type="radio" value="men,men women" name="gender"/>
                       <label for="men">Girls</label>
                           
                   </li>
                    
                </ul>

              </div>

{/* category section */}
<div className='filter-category-section' >
   <span className="category-section-header">Categories</span>
<div className="category-searchbox-content ">
  
 <span className='filter-search-icon'  >{!opensearch ?<IoSearch className='search-logo' onClick={()=>setOpenSearch(!opensearch)}/>:<MdCancel  className='cancel-logo' onClick={()=>setOpenSearch(!opensearch)}/> }  </span>
 {opensearch && <input type="text" className="filter-search-inputBox " placeholder="Search for Categories"/>}
</div>

<ul className="Category-products-list">
<li> 
  <label className='Lipstick-Product'> 
    <input type='checkbox' value="lipstick"/>
      Lipstick  
    <span className='number'>(12391)</span>
   </label>
</li>  


<li> 
   <label className='Nailpolish-Product'> 
    <input type='checkbox' value="NailPolish"/>
     NailPolish
    <span className='number'>
      (10391)
    </span>
  </label>
</li> 



<li> 
  <label className="perfume-Product">
    <input type='checkbox' value="perfume"/>
    Perfume
    <span className='number'>
      (4410)
    </span>
  </label>
</li>  


<li> 
  <label className="Facewash-Product">
    <input type='checkbox' value="Facewash"/>
    Face Wash and Cleanser
    <span className='number'>
      (2639)
    </span>
  </label>
</li>  



<li> 
  <label className="MessageOil-Product">
    <input type='checkbox' value="MessageOil"/>
   Message Oils
    <span className='number'>
      (12391)
    </span>
  </label>
</li>  


<li> 
  <label className="Bindi-Product">
    <input type='checkbox' value="bindi"/>
    Bindi
    <span className='number'>
      (2639)
    </span>
  </label>
</li>


<li> 
  <label className="Makeup-Product">
    <input type='checkbox' value="makeup"/>
    Makeup Combo
    <span className='number'>
      (2639)
    </span>
  </label>
</li>


<li> 
  <label className="eye-Product">
    <input type='checkbox' value="eye"/>
    Eyeshadow
    <span className='number'>
      (2331)
    </span>
  </label>
</li>


</ul>


<div className='Category-more'>
  +175 More
</div>

</div>

             {/* brand filter section */}





             <div className='Brand-category-section'>
   <span className="Brand-section-header">BRAND</span>
<div className="Brand-searchbox-content">
<span className='Brand-search-icon'  >{!openBrandsearch ?<IoSearch className='search-logo' onClick={()=>setOpenBrandSearch(!openBrandsearch)}/>:<MdCancel  className='cancel-logo' onClick={()=>setOpenBrandSearch(!openBrandsearch)}/> }  </span>
 {openBrandsearch && <input type="text" className="Brand-search-inputBox " placeholder="Search Brands"/>}
  
</div>

<ul className="Brand-products-list">
<li> 
  <label className="Comet Busters-Product">
    <input type='checkbox' value="Comet Busters" />
    Comet Busters
    <span className='number'>
      (12391)
    </span>
  </label>
</li>  


<li> 
  <label className="MI FASHION-Product">
    <input type='checkbox' value="MI FASHION"/>
    MI FASHION
    <span className='number'>
      (10391)
    </span>
  </label>
</li> 



<li> 
  <label className="PERPAA-Product">
    <input type='checkbox' value="PERPAA-FASHION"/>
    PERPAA
    <span className='number'>
      (4410)
    </span>
  </label>
</li>  


<li> 
  <label className="NOY-Product">
    <input type='checkbox' value="NOY"/>
    NOY
    <span className='NOY'>
      (2689)
    </span>
  </label>
</li>  



<li> 
  <label className="Deve-Herbes-Product">
    <input type='checkbox' value="DeveHerbes"/>
    Deve Herbes
    <span className='number'>
      (13391)
    </span>
  </label>
</li>  


<li> 
  <label className="ME-ON-Product">
    <input type='checkbox' value="ME-ON"/>
    ME-ON
    <span className='number'>
      (3639)
    </span>
  </label>
</li>


<li> 
  <label className="Menjewell-Product">
    <input type='checkbox' value="Menjewell"/>
    Menjewell
    <span className='number'>
      (1639)
    </span>
  </label>
</li>


<li> 
  <label className="FORFOR-Product">
    <input type='checkbox' value="FORFOR"/>
    FORFOR
    <span className='number'>
      (2831)
    </span>
  </label>
</li>


</ul>


<div className='Brand-more'>
  +1572 More
</div>

</div>

 <div className="Price-filter-section">

  <span className='Price-header'>PRICE</span>

  <ul className="Price-products-list">
<li> 
  <label className="Price-Product">
    <input type='checkbox' value="Price" />
    Rs. 29 to Rs.11499
    <span className='number'>
      (99352)
    </span>
  </label>
</li>  


<li> 
  <label className="Price-Product">
    <input type='checkbox' value="Price"/>
    Rs. 11499 to Rs. 22969
    <span className='number'>
      (159)
    </span>
  </label>
</li> 



<li> 
  <label className="Price-Product">
    <input type='checkbox' value="Price"/>
    Rs. 22969 to Rs. 34439
    <span className='number'>
      (44)
    </span>
  </label>
</li>  


<li> 
  <label className="Price-Product">
    <input type='checkbox' value="Price"/>
    Rs. 34439 to Rs. 45909
    <span className='number'>
      (9)
    </span>
  </label>
</li>  

</ul>

  
 </div>       











 {/* color filter section  */}

 <div className='color-filter-section'>
   <span className='color-header'>Color</span>
   <div className='color-searchinput-searchicon'>
     
    <span className='color-searhIcon'  >{!openColorsearch ?<IoSearch className='search-logo' onClick={()=>setOpenColorSearch(!openColorsearch)}/>:<MdCancel  className='cancel-logo' onClick={()=>setOpenColorSearch(!openColorsearch)}/> }  </span>
 {openColorsearch && <input type="text" className="color-input-search-input " placeholder="Search Colors"/>}
   </div>


   <ul className='color-filter-lists'>
    <li>
      <label className='color-product-label'>
        <input type='checkbox' value='color'/>
        <span className='color-white-icon'></span>
        White
        <span className='number'>(11225)</span>

      </label>
    </li>


    <li>
      <label className='color-product-label'>
        <input type='checkbox' value='color'/>
        <span className='color-Pink-icon'></span>
        Pink
        <span className='number'>(10225)</span>

      </label>
    </li>


    <li>
      <label className='color-product-label'>
        <input type='checkbox' value='color'/>
        <span className='color-Multi-icon'></span>
        Multi
        <span className='number'>(8725)</span>

      </label>
    </li>

    <li>
      <label className='color-product-label'>
        <input type='checkbox' value='color'/>
        <span className='color-Black-icon'></span>
        Black
        <span className='number'>(1225)</span>

      </label>
    </li>


    <li>
      <label className='color-product-label'>
        <input type='checkbox' value='color'/>
        <span className='color-Brown-icon'></span>
        Brown
        <span className='number'>(8725)</span>

      </label>
      </li>

      <li>
      <label className='color-product-label'>
        <input type='checkbox' value='color'/>
        <span className='color-Red-icon'></span>
        Red
        <span className='number'>(6725)</span>

      </label>
    </li>
     

    <li>
      <label className='color-product-label'>
        <input type='checkbox' value='color'/>
        <span className='color-Green-icon'></span>
        Green
        <span className='number'>(6725)</span>

      </label>
    </li>
       

   </ul>

   <div className='Color-more'>
  +39 More
   </div>

 </div>


 <div className='Discount-range-section'>
    <div className='Discount-filter-section'>
      <span className='Discount-header'>DISCOUNT RANGE</span>
       <ul className='Discount-range-lists'>
         <li>
         <label className='discount-range-label'> 
          <input className='Discount-radio' type='radio'></input> 
          10% and above 
          </label>
         </li>


         <li>
         <label className='discount-range-label'> 
          <input className='Discount-radio' type='radio'></input> 
          20% and above 
          </label>
         </li>

         <li>
         <label className='discount-range-label'> 
          <input className='Discount-radio' type='radio'></input> 
          30% and above 
          </label>
         </li>


         <li>
         <label className='discount-range-label'> 
          <input className='Discount-radio' type='radio'></input> 
          40% and above 
          </label>
         </li>



         <li>
         <label className='discount-range-label'> 
          <input className='Discount-radio' type='radio'></input> 
          50% and above 
          </label>
         </li>


         <li>
         <label className='discount-range-label'> 
          <input className='Discount-radio' type='radio'></input> 
          60% and above 

          </label>
         </li>


         <li>
         <label className='discount-range-label'> 
          <input className='Discount-radio' type='radio'></input> 
          70% and above 
          </label>
         </li>


         <li>
         <label className='discount-range-label'> 
          <input className='Discount-radio' type='radio'></input> 
          80% and above 
          </label>
         </li>


         <li>
         <label className='discount-range-label'> 
          <input className='Discount-radio' type='radio'></input> 
          90% and above 
          </label>
         </li>


          
 
       </ul>

    </div>

 </div>
              
              
           
           
</div>   


 {/* products display section */}

 <div className='products-display-container-section'> 

 <div className='dropdown-dropdown-menu-conatiner'>
 
 <div className='Filter-dropmenu'>
                <div className='Bundles-content'>
                <button className='Bundles-btn' onClick={BundlesHandler}>Bundles {!arrowOpen ? <MdOutlineKeyboardArrowDown className='arrowDown' />:<MdOutlineKeyboardArrowUp className='arrowUp'/>}</button>
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
                <button class="Country-btn" onClick={CountryHandler}>Country of Origin{!countryOpen ? <MdOutlineKeyboardArrowDown className='arrowDown' />:<MdOutlineKeyboardArrowUp className='arrowUp'/>}</button> 
                {countryOpen &&<div class="dropdown-Country">
                    <div className='checkbox2'>
                      <input type="checkbox" className='checkbox' name="Bundles"/><label>All Countries</label> 
                    </div>

                    <div className='checkbox2'>
                      <input type="checkbox" className='checkbox' name="Single-Style"/> <label>India</label>
                    </div>
                   </div>}
            
                </div>

                <div className='Size-content'>
                <button class="Size-btn" onClick={SizeHandler}>Size{!sizeopen?<MdOutlineKeyboardArrowDown className='arrowDown' />:<MdOutlineKeyboardArrowUp className='arrowUp'/>}</button>
                {sizeopen &&<div class="dropdown-Size">
                    <div className='checkbox3'>
                      <input type="checkbox" className='checkbox'name="Bundles"/><label>S</label>
                    </div>

                    <div className='checkbox3'>
                      <input type="checkbox"  className='checkbox'name="Single-Style"/><label>M</label>
                    </div>

                    <div className='checkbox3'>
                      <input type="checkbox" className='checkbox'name="Bundles"/><label>L</label>
                    </div>

                    <div className='checkbox3'>
                      <input type="checkbox"  className='checkbox'name="Single-Style"/><label>XL</label>
                    </div>



                    <div className='checkbox3'>
                      <input type="checkbox"  className='checkbox'name="Single-Style"/><label>XXL</label>
                    </div>

                    <div className='checkbox3'>
                      <input type="checkbox"  className='checkbox'name="Single-Style"/><label>XXXL</label>
                    </div>

                    <div className='checkbox3'>
                      <input type="checkbox"  className='checkbox'name="Single-Style"/><label>XS</label>
                    </div>

                    <div className='checkbox3'>
                      <input type="checkbox"  className='checkbox'name="Single-Style"/><label>XM</label>
                    </div>
                   </div>}
                </div>
  </div>


  <div className='ShopCatagory-sort'>
   <div className='Sort-sort-by'>
     Sort by: 
     
     <select  className='sort-list'>
      
      <option>
       <label class="sort-label"> 
         Recommended  
       </label>
        
      </option>




      <option> 
      <label class="sort-label "> 
      What's New
      </label>
      </option>

      <option>
      <label class="sort-label ">
          Popularity 
        </label>
      </option>


      <option>
      <label class="sort-label ">
      Better Discount </label>
      </option>

      <option>
      <label class="sort-label ">
      Price: High to Low  </label>
      </option>

      <option>
      <label class="sort-label ">
      Price: Low to High 
      </label>
      </option>

      <option>
      <label class="sort-label ">
      Customer Rating  
      </label>
      </option>
          
      
     </select>
     
      
      
      
  </div>
         
          

  </div> 
        
 </div>
     
 

 <div className='Beauty-card-Container'>
          <div className='Beauty-card-content'>
             {
                Beautyproducts.map((item ,index)=>{
                    return(
                    <div className='Card-Card-Beauty'>
                      
                        <div className='Card-Card-Image'>
                        <img src={item.Image} alt='' className='Beauty-Product-image'/>
                        </div>
                        <div className='beauty-deatils-beauty'> 
                        <div className='rating-rate'>
                            <p><span> {item.rating}</span><img src={item.greenstar} alt="" className='greenstar'/><span> {item.popular}</span></p>
                        </div>
                        <div className='Bauty-Product-title'>
                            <header>{item.Title}</header>
                        </div>


                        <div className='Beauty-Product-Discription'>
                            <header>{item.Discription}</header>
                        </div>


                        <div className='Beauty-Product-amount'>
                            <p className='newamount'>{item.newAmount}</p>
                            <p className='oldamount'>{item.oldAmount}</p>
                            <p className='offer'>{item.offer}</p>
                        </div>

                        </div>
                        </div>    
                     
                    )
                })
             }
          </div>


          

          <div className='pagination-pagination'>
            <div className='page'>
                <p>Page 1 of 1986</p>
            </div>


            <div className='Pagination-number'>
                 <li className='active'>1</li>
                 <li>2</li>
                 <li>3</li>
                 <li>4</li>
                 <li>5</li>
                 <li>6</li>
                 <li>7</li>
                 <li>8</li>
                 <li>9</li>
                 <li>10</li>






            
            </div>

            <div className='pagination-next'>
                <li><p>NEXT <IoIosArrowForward  className='arrow-next'/></p> </li>
            </div>
          </div>

        </div>
          
        </div> 

        </div>
        </div>
    );
}

export default FullbeautyFilter;
