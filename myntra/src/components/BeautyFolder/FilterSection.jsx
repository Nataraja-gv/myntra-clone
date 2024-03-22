import React from 'react';
import './Filter.css'
const FilterSection = () => {
    return (

      
        <div className='Filterimage-Conatiner'>
 
        <div className='FilterSection'>
             
            <div className='category-radio'>
                 
                 
               <form className = 'category-filter'> 
                 <span><input type='radio' name='category-gender' className='gender-button'/> Mens</span>
                 <span><input type='radio' name='category-gender' className='gender-button' /> Womens</span> 
                 <span><input type='radio' name='category-gender' className='gender-button'/>Boys</span> 
                 <span><input type='radio' name='category-gender' className='gender-button'/>Girls</span>  
                 
                </form>
               
            </div>
            

            <div className='category-checkout'>
             
              <form className='category-checkout'>
              <h5>CATEGORIES</h5>
               <span><input type="checkbox"/>Lipstick  <i>(12347)</i></span>
              <span><input type="checkbox"/>Nail Polish    <i>(10347)</i></span>
              <span><input type="checkbox"/>Perfume      <i>(4451)</i></span>
              <span><input type="checkbox"/>Message Oils      <i>(2647)</i></span>  
              <span><input type="checkbox"/>Face Wash and Cleanser     <i>(2047)</i>  </span>
               <span><input type="checkbox"/>Bindi       <i>(2338)</i> </span>
               <span><input type="checkbox"/>Skin Care Combo     <i>(2347)</i> </span>
             
              </form> 
            </div>


            <div className='category-checkout'>
             
              <form className='category-checkout'>
              <h5>BRAND</h5>
               <span><input type="checkbox"/>HIGHLANDER <i>(1074)</i></span>
              <span><input type="checkbox"/>Indian Terrain<i>(939)</i> </span>
              <span><input type="checkbox"/>Roadster <i>(613)</i></span>
              <span><input type="checkbox"/>Blackberrys<i>(508)</i></span>  
              <span><input type="checkbox"/>Peter England <i>(498)</i> </span>
               <span><input type="checkbox"/>Puma <i>(489)</i></span>
               <span><input type="checkbox"/>Nike <i>(411)</i> </span>
             
              </form> 
            </div>



            <div className='category-price'>
            
              <form className='category-rangePrice'>
              <h5>Price</h5>
               <span><input type="checkbox"/><label>Rs. 2249 to Rs. 2987</label> <i>(11708)</i></span>
               <span><input type="checkbox"/><label>Rs. 2987 to Rs. 3787</label><i>(302)</i></span>
               <span><input type="checkbox"/> <label>Rs. 4087 to Rs. 5887</label><i>(250)</i></span>
               <span><input type="checkbox"/> <label>Rs. 2987 to More</label><i>(87)</i></span>
                </form> 
            </div>


            <div className='category-color'>
             
              <form className='category-color-color'>
              <h5>Color</h5>
               <span><input type="checkbox"/><label style={{color:"blue"}}> Blue</label> <i>(2761)</i></span>
               <span><input type="checkbox"/><label style={{color:"pink"}}>pink</label><i>(2391)</i></span>
               <span><input type="checkbox"/> <label style={{color:"seagreen"}}> Sea Green</label><i>(1006)</i></span>
               <span><input type="checkbox"/> <label style={{color:"red"}} >Red</label><i>(645)</i></span>
               <span><input type="checkbox"/> <label style={{color:"black"}}>Black</label><i>(1245)</i></span>
                </form> 
            </div>
           
            <div className='category-Discount-Range'>
              
               <form className='category-range'> 
               <h5>Discount-Range</h5> 
                  <span><input type='radio'/> <lable> 20% and above</lable></span>
                 <span><input type='radio'/> <label>30% and above</label></span>
                 <span><input type='radio'/>  <label>50% and above</label></span> 
                 <span><input type='radio'/> <label>70% and above</label></span>
                </form>
               
            </div>

             

             
</div>
        </div>
    );
}

export default FilterSection;
