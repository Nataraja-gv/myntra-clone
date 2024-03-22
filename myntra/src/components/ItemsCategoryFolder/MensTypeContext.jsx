import React, { createContext } from 'react';
 import CategoryProducts from './ItemsCategoryProducts.jsx'

 export const MenstypeDress=createContext(null)


const MensTypeProductsProvider = (props) => {
     const MenTypevalue={CategoryProducts}
    return (
         <MenstypeDress.Provider value={MenTypevalue}>
            {props.children}

         </MenstypeDress.Provider>
    );
}

export default MensTypeProductsProvider;
