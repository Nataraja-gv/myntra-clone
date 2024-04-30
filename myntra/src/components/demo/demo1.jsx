import React, { createContext, useState } from 'react';
import HoverBeautyproducts from '../../components/HoverComponent/HoverData.jsx';

// Create the Context for Beauty products
export const ContextBeauty = createContext(null);

const ContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]); // Initialize the cart state as an empty array

  // Function to add an item to the cart using a product ID
  const addToCart = (productId) => {
    // Find the product in HoverBeautyproducts by its ID
    const product = HoverBeautyproducts.find((p) => p.id === productId);
   console.log(product)
    if (product) {
      const existingItem =  console.log(cart.find((item) => item.id === product.id),"bnjc");

   
      if (existingItem) {
        // If the item is already in the cart, increase its quantity
        setCart(
          cart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        );
      } else {
        // If it's a new product, add it to the cart with a quantity of 1
        setCart([...cart, { ...product, quantity: 1 }]);
      }
    } else {
      console.error("Product not found in HoverBeautyproducts");
    }
  };

  const ContextValue = {
    HoverBeautyproducts,  
    cart,  
    addToCart,  
  };

  return (
    <ContextBeauty.Provider value={ContextValue}>
      {children}
    </ContextBeauty.Provider>
  );
};

export default ContextProvider;
