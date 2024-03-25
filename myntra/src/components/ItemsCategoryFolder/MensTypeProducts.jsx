import React, { useContext } from 'react';
//  import ContextMenProvider from '../../components/ContextFolder/ContextMen.jsx';
import{ menContext }from '../../components/ContextFolder/ContextMen.jsx';

const MensTypeProducts = (props) => {
    const {Products}=useContext(menContext)

    return (

      
        <div className=''>
            {Products.map((item,index)=>{
                if(props.category===item.category){
                    return(
                        
                        <div key={index}>

                        <img src={item.Image}/>
                        </div>
                    )
                }

                else{
                    return null;
                }
            })}
        </div>

            
        
    );
 
}

export default MensTypeProducts;
