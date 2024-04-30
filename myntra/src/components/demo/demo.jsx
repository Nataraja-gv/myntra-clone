import React, { createContext, useState } from 'react';
import HoverBeautyproducts from '../../components/HoverComponent/HoverData.jsx'

 


const DefaultCartBag=()=>{
     let  Cart={}
     for ( let index=0;index<HoverBeautyproducts.length+1;index++) {
          Cart[index]=0;
     }
     
     return Cart;

} 



 
export const ContextBeauty =createContext(null)
const ContextProvider = ({children}) => {

      const[cart,setCart]=useState(DefaultCartBag()) 
      const[wishlist,setWishlist]=useState(DefaultCartBag()) 
       
        
      const addToBag =(item)=>
      {
          setCart((prob)=>({...prob,[item]:prob[item]+ 1}))
          
      }
     const  removeBag  =(item)=>{
          setCart((prob)=>({...prob,[item]:prob[item]-1}))
          
      }

      const  removeProductBag  =(item)=>{
          setCart((prob)=>({...prob,[item]:prob[item]===0}))
          
      }

      const clearCart = () => {
          setCart([])
        };


     const addtoWishlist =(item)=>{
          setWishlist((prob)=>({...prob,[item]:prob[item] + 1}))
          
      }
       
     const  removeFromWishlist  =(item)=>{
          setWishlist((prob)=>({...prob,[item]:prob[item]===0}))
          
      }
      

       
      const calculateTotalAmount = () => {
          let totalAmount = 0;
          for (const item in cart) {
            if (cart[item] > 0) {
               
              const itemInfo = HoverBeautyproducts.find((product) => product.id === parseInt(item));
              if (itemInfo) {
               
                totalAmount += itemInfo.Namount * cart[item];
              }
            }
          }
          return totalAmount ;
        };

        const discountMrp= ()=>{
          let  discountamount=0;
          for (const item in cart){
               if (cart[item]>0){
                    const  discountinfo =HoverBeautyproducts.find((prob)=>prob.id===parseInt(item))
     
                    if(discountinfo){
                         discountamount += (discountinfo.Oamount - discountinfo.Namount) * cart[item]
                    }
                     
     
          }
          }
          return discountamount
     
         };

    const CalculatetotalMRP = ()=>{
     let totalmrp=0;
     for(const item  in cart){
          if (cart[item]>0){
               const  mrpinfo =HoverBeautyproducts.find((prob)=>prob.id===parseInt(item))

               if (mrpinfo){
                    totalmrp +=mrpinfo.Oamount * cart[item];
               }     
          }
     }
     return totalmrp;
    } ;

     
    const totalCartItems=()=>{
      let  CartItems=0;
      for(const item in cart){
          if(cart[item]>0){
               CartItems += item.length  ;
          }
      }
     
      return CartItems;

    }

    

     



      const ContextValue={wishlist,addToBag,addtoWishlist,removeFromWishlist ,removeBag ,clearCart,removeProductBag  ,totalCartItems,discountMrp,CalculatetotalMRP,HoverBeautyproducts,cart,calculateTotalAmount}
    return (
         <ContextBeauty.Provider value={ContextValue}>
              {children}
         </ContextBeauty.Provider>
    );
}

export default ContextProvider;
