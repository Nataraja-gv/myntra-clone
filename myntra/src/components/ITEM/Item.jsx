import React from 'react';
import './Item.css'


const Item = (props) => {
    return (
        <div className='Item-conatiner'>
        <div className='Item-Image-conatiner'>
           <img src={props.image} alt='' className='item-image'/>
        </div>
           <div className='Item-details-main-section'>
              <ul className='item-rating-lists'>
                <li>{props.rating}</li>
                <li>{props.greenstar}</li>
                <li>{props.popular}</li>
              </ul>

              <ul className='item-title'>
                <li>{props.title}</li>
              </ul>

              <ul className='item-description'>
                <li>{props.description}</li>
               </ul>

               <ul className='item-amount-lists'>
                <li>{props.newprice}</li>
                <li>{props.oldPrice}</li>
                <li>{props.off}</li>

              </ul>
           </div>

         
           
        </div>
    );
}

export default Item;
