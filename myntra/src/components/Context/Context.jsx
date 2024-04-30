import React, { createContext, useMemo, useState } from 'react';
import HoverBeautyproducts from '../../components/HoverComponent/HoverData.jsx';


export const ContextBeauty = createContext(null);

const ContextProvider = ({ children }) => {
   
 
const [cart, setCart] = useState([]);
const [isWishlist,setIsInWishlist]=useState([]);

const addToCart = (item) => {

  // console.log(item,"item");
  const existingItem = cart.find((cartItem) => cartItem.id === item.id);
  // console.log(existingItem,"itemmmmmm")  
  if (existingItem) {
    setCart(cart.map((cartItem) =>cartItem.id === item.id ? cartItem : cartItem));
  } 

  else {
   setCart([...cart, { ...item, quantity: 1 }]);
  }
};


 

const addToWishlist=(item)=>{
  const existingItem = isWishlist.find((cartItem) => cartItem.id === item.id);
  if (existingItem) {
    setIsInWishlist(
       
      isWishlist.map((cartItem) =>
       
        cartItem.id === item.id
          ?    cartItem
          : cartItem,
      )
    );
  } else {
    setIsInWishlist([...isWishlist, { ...item, quantity: 1 }]);
  }
  
}


const removeFromCart = (itemId) => {
  setCart(cart.filter((cartItem) => cartItem.id !== itemId));
};


const removeFromWishlist = (itemId) => {
  setIsInWishlist(isWishlist.filter((cartItem) => cartItem.id !== itemId));
};

 
const clearCart = () => {
  setCart([]);
};


const setItemsQty = (productId, quantity) => {
  setCart((prevCart) => {
    return prevCart.map((item) =>
      item.id === productId ? { ...item, quantity } : item
    );
  });
};



const calculateTotals = useMemo(() => {
  let total = 0;
  let discount = 0;
  let mrp = 0;

  cart.forEach((cartItem) => {
    total += (cartItem.Namount) * cartItem.quantity;
    discount += (cartItem.Oamount-cartItem.Namount) * cartItem.quantity;
    mrp += cartItem.Oamount * cartItem.quantity;
  });

  return { total, discount, mrp };
}, [cart]);



 

const ContextValue = {HoverBeautyproducts ,setItemsQty,addToWishlist,isWishlist,addToCart,cart,removeFromCart,removeFromWishlist,clearCart ,total: calculateTotals.total,discount: calculateTotals.discount,mrp: calculateTotals.mrp,};
    
  return (
    <ContextBeauty.Provider value={ContextValue}>
      {children}
    </ContextBeauty.Provider>
  );
};

export default ContextProvider;
