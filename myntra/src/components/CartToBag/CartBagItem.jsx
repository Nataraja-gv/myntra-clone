import React, { useContext, useState } from "react";
import "./CartToBag.css";
import { ContextBeauty } from "../Context/Context";
import Product from "../BeautyProducts/Product";
import { FaCaretDown } from "react-icons/fa";
import rupee from "../productInfo/rupee.png";
import { PiKeyReturnLight } from "react-icons/pi";
import { FcCheckmark } from "react-icons/fc";
import { FaXmark } from "react-icons/fa6";
import { CiSquarePlus } from "react-icons/ci";
import { CiSquareMinus } from "react-icons/ci";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa";
import { ThemeContext } from "../ThemeContext/Theme";
import { MdCancel } from "react-icons/md";
const CartBagItem = () => {
  const { theme } = useContext(ThemeContext);

  const { HoverBeautyproducts, setItemsQty, cart, removeFromCart, clearCart } =
    useContext(ContextBeauty);
  const [qty, setQty] = useState(null);

  const handleQtyChange = (productId, quantity) => {
    setItemsQty(productId, quantity);
    setQty(null);
  };

  return (
    <div className="container-container-main-container">
      <div className="clearCart-section">
        {" "}
        <button
          className="clearCart-btn"
          style={
            theme === "light"
              ? { borderColor: "" }
              : { borderColor: "black", backgroundColor: "#d6ccfe" }
          }
          onClick={clearCart}
        >
          clearCart
        </button>
      </div>

      <div>
        {cart?.map((item) => {
          return (
            <div
              className="cart-bag-item-container"
              style={
                theme === "light"
                  ? { borderColor: "" }
                  : { borderColor: "black", backgroundColor: "#d6ccfe" }
              }
            >
              <div className="">
                <img src={item?.Image} className="cartbag-image-image" />
                {/* <button>{cart[item.id]}</button> 
                                 <button  onClick={()=>{addToBag(item.id)}}>+</button>
                                  <button  onClick={()=>{removeFormBag(item.id)}}>-</button> */}
              </div>

              <div className="bag-products-details">
                <p
                  className="bag-title"
                  style={theme === "light" ? { color: "" } : { color: "white" }}
                >
                  {item?.Title}
                </p>
                <p
                  className="bag-discription"
                  style={theme === "light" ? { color: "" } : { color: "black" }}
                >
                  {item?.Discription}
                </p>
                <p
                  className="bag-sold"
                  style={theme === "light" ? { color: "" } : { color: "black" }}
                >
                  Sold by : A.R.ENTERPRISES
                </p>

                <div className="cartbag-sort-section">
                  <ul className="cartbag-size">
                    <li className="cartbag-size-text">Size:50 ML</li>
                    <li>
                      <FaCaretDown className="cartbag-size-icon" />
                    </li>
                  </ul>

                  <ul className="cartbag-qty">
                    <h1 onClick={() => setQty(item.id)}>
                      {" "}
                      Qty: {item.quantity}{" "}
                      <FaAngleRight className="FaAngleRight-arrow" />
                    </h1>

                    {qty === item.id && (
                      <ul className="qty-inc-dec-qty-section">
                        {[...Array(10)].map((_, index) => (
                          <li
                            key={index}
                            onClick={() => handleQtyChange(item.id, index + 1)}
                          >
                            {index + 1}
                          </li>
                        ))}
                        <MdCancel onClick={()=>{setQty(false)}} className="qty-cancel-btn" />

                      </ul>
                    )}
                  </ul>
                </div>
                <div className="cartbag-payment-section">
                  <ul className="cartbag-namount">
                    <li className="cartbag-rupee">
                      <img src={rupee} className="cartbag-rupee-image" />
                    </li>
                    <li className="cartbag-newamount">{item.Namount}</li>
                  </ul>

                  <ul className="cartbag-oamount">
                    {/* <li className="cartbag-rupee"><img src={rupee}  className="cartbag-rupee-image"/></li> */}
                    <li
                      className="cartbag-oldamount"
                      style={
                        theme === "light" ? { color: "" } : { color: "black" }
                      }
                    >
                      RS.{item.Oamount}
                    </li>
                  </ul>

                  <ul className="cartbag-offer">
                    <li
                      className="cartbag-offer"
                      style={
                        theme === "light" ? { color: "" } : { color: "white" }
                      }
                    >
                      {item.offer}
                    </li>
                  </ul>
                </div>

                <ul className="cartbag-return-policy">
                  <li>
                    <PiKeyReturnLight className="cartbag-return-policy-icon" />
                  </li>
                  <li className="cartbag-return-policy-text">
                    <span>14 days</span> return available
                  </li>
                </ul>

                <ul className="delivary-between-section">
                  <li>
                    <FcCheckmark className="delivary-between-right" />
                  </li>
                  <li className="delivary-between-txt">
                    Delivery between <span>11 Apr - 13 Apr</span>
                  </li>
                </ul>
              </div>
              <div className="bag-cancel-section">
                <FaXmark
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    removeFromCart(item.id);
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CartBagItem;
