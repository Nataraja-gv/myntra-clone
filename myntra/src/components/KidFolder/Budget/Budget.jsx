import React from 'react';
import './Budget.css'
import  BudgetImage from './BudgetData.jsx'


const Budget = () => {
    return (
        <div className='BudgetImage-main-container'>
            <div className='Budget-Items'>

 {BudgetImage.map((item,index)=>{
  return(
      <div className=' '>
          <div className='Image-Image-Budget' key={index}>
               <img src={item.Image} alt="" className='Img-Budget-img' />
                
          </div>
      </div>
  )
})}
</div>
            
        </div>
    );
}

export default Budget;
