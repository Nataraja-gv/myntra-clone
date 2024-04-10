import React from 'react';
import './Releted.css'

const Releted = (props) => {
    return (
        <div className='beauty-relted-container'>
          <img src={props.Image} alt='' className='releted-img-image'/>


        <div className='releted-beauty-details'  > 
          <div className='releted-rating-section'>
            <p className='related-rating'>{props.rating}</p>
            <img src={props.greenstar} alt='' className='related-green-image'/>
          </div>
          <hr style={{width:"100%"}}/>
          <p className='releted-Title'>{props.Title}</p>
          <p className='releted-description'>{props.Description}</p>

          <div className='related-amount-section'>
            <p className='related-Namount'>Rs.{props.Namount}</p>
            <p className='related-Oamount'>Rs.{props.Oamount}</p>
            <p className='related-offer'>{props.offer}</p>
          </div> 
          </div>
        </div>
    );
}

export default Releted;
