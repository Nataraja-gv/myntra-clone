import React, { useContext, useEffect, useState } from 'react';
import './ViewSimilar.css';
import { ContextBeauty } from '../Context/Context.jsx';
import Releted from '../Releted/Releted';
import { no_product_image } from '../contants/Contants.js';
import { ThemeContext } from '../ThemeContext/Theme.jsx';

export default function ViewSimilarproducts() {
  const { HoverBeautyproducts } = useContext(ContextBeauty);
  const {theme} =useContext(ThemeContext)

  const [search, setSearch] = useState("");
  const [searchProductsList, setSearchProductsList] = useState(HoverBeautyproducts);
   

   
  const Productlistfilter = (searchTextInput) => {
    return HoverBeautyproducts.filter((productItem) =>
      productItem.Title.toLowerCase().includes(searchTextInput.toLowerCase())
    );
  };

  
  useEffect(() => {
    const  filtereditemproduct =   Productlistfilter(search);
    setSearchProductsList( filtereditemproduct);
  }, [search]);


   
  if (searchProductsList.length === 0) {
    return (
      <> 

 
      <input
        className='search-text'
        type='text'
        placeholder='Search for products...'
        value={search}
        onChange={(event) => setSearch(event.target.value)} style={theme==="light"?{backgroundColor:""}:{backgroundColor:"white"}}
      />
      <div className='no_product_image-section'>
        <img className='no_product_image' src={no_product_image} alt='' />
      </div>
      </>
    );
  }

  return (
    <>

<style>
        
      </style>
      <input
        className='search-text'
        type='text'
        placeholder='Search for products...'
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
<button type='submit' className='submit-btn' onClick={()=>{ const   filtereditemproduct =   Productlistfilter(search);
    setSearchProductsList(filtereditemproduct);}}>Search</button>

      <div className='view-releted-products-container'>
        {searchProductsList.map((item, index) => (
          <Releted key={index} Image={item.Image} rating={item.rating} greenstar={item.greenstar} Title={item.Title} Description={item.Discription} Namount={item.Namount} Oamount={item.Oamount} offer={item.offer}
          />
        ))}
      </div>
    </>
  );
}
