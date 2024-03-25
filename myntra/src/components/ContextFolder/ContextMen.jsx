import React, { createContext } from 'react';
import CategoryProducts from '../../components/ItemsCategoryFolder/ItemsCategoryProducts.jsx';


export  const menContext=createContext(null)

const ContextMenProvider = ({props}) => {
    const MenContextValue={CategoryProducts}

    return (
         <menContext.Provider value={MenContextValue}>
            {props}
         </menContext.Provider>
    );
}

export default ContextMenProvider;
