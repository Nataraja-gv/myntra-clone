import React, { useContext } from 'react';
import {MenstypeDress} from './MensTypeContext.jsx'

const MensTypeProducts = (props) => {
    const {CategoryProducts}=useContext(MenstypeDress)
    return (
        <div className=''>
            {CategoryProducts.map((item,index)=>{
                if(props.category===item.category){
                    return(
                        <h1>hello</h1>
                    )
                }
            })}
        </div>

            
        
    );
}

export default MensTypeProducts;
