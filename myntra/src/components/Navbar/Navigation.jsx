import React, { useState, useRef, useContext } from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";
import myntra from "./myntra.png";
import Studio from "./studio.png";
import { CiUser } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { BiSearchAlt2 } from "react-icons/bi";
import { ContextBeauty } from "../Context/Context";
import { ThemeContext } from "../ThemeContext/Theme";
import { FaRegMoon } from "react-icons/fa";
import { BiSun } from "react-icons/bi";

function Navigation() {
  const { theme, handleTheme } = useContext(ThemeContext);
  const { cart } = useContext(ContextBeauty);
  const [menu, setMenu] = useState("shop");
  const [profilebutton, setProfileButton] = useState(false);

  const loginHandler = () => {
    setMenu("Login");
    if (profilebutton) {
      setProfileButton(false);
    }
  };

  return (
    <div className="Navigation-container" style={theme==="light"?{backgroundColor:"white"}:{backgroundColor:" #3333cc"}}>
      <div
        className="Myntra-image "
        onClick={() => {
          setMenu("shop");
        }}
      >
        <Link to="/">
          <img src={myntra} alt="noimg" className="image-myntra-image" />
          {menu === "shop" ? <></> : <></>}
        </Link>
      </div>

      <div className="Nav-Menu">
        {/* onClick={window.scrollTo(0,0)} */}
        <li
          className="Mens"
          onClick={() => {
            setMenu("Men");
          }}
        >
          {" "}
          <Link to="/Men" className="Men-achor">
            {" "}
            <a href="#" style={theme==="light"?{color:"black"}:{color:"white"}}>MEN{menu === "Men" ? <></> : <></>}</a>
          </Link>
          <div className="Mens-dropmenu" style={theme==="light"?{backgroundColor:"white"}:{backgroundColor:" #c3baf3"}}>
            <div className="Mens-dropmenu-conatiner">
              <div className="colm">
                <ul className="mens-mens">
                  <header>Topwear</header>
                  <li>
                    <a href="#">T-Shirts</a>{" "}
                  </li>
                  <li>
                    <a href="#">Casual Shirts</a>{" "}
                  </li>
                  <li>
                    <a href="#">Formal Shirts</a>{" "}
                  </li>
                  <li>
                    <a href="#">Sweatershirts</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="#">Sweaters</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="#">jackets</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="#">Blazers & Coats</a>
                  </li>
                  <li>
                    {" "}
                    <a href="#">Suits</a>
                  </li>
                  <li>
                    <a href="#">Rain Jackets</a>
                  </li>
                </ul>

                <ul className="mens-mens">
                  <header>Indian & Festive Wear</header>
                  <li>
                    <a href="#">Kurtas & Kurta Sets</a>{" "}
                  </li>
                  <li>
                    <a href="#">Sherwanis</a>{" "}
                  </li>
                  <li>
                    <a href="#">Nehru Jackets</a>{" "}
                  </li>
                  <li>
                    <a href="#">Dhotis</a>{" "}
                  </li>
                </ul>
              </div>

              {/* col2 */}

              <div className="colm">
                <ul className="mens-mens">
                  <header>Bottomwear</header>
                  <li>
                    <a href="#">Jeans</a>{" "}
                  </li>
                  <li>
                    <a href="#">Casual Trousers</a>{" "}
                  </li>
                  <li>
                    <a href="#">Formal Trousers</a>{" "}
                  </li>
                  <li>
                    <a href="#">Shorts</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="#">Track Pants & Joggers</a>{" "}
                  </li>
                </ul>

                <ul className="mens-mens">
                  <header>Innerwear & Sleepwear</header>
                  <li>
                    <a href="#">Briefs & Trunks</a>{" "}
                  </li>
                  <li>
                    <a href="#">Boxers</a>{" "}
                  </li>
                  <li>
                    <a href="#">Vests</a>{" "}
                  </li>
                  <li>
                    <a href="#">Sleepwear & Loungewaer</a>{" "}
                  </li>
                  <li>
                    <a href="#">Thermals</a>{" "}
                  </li>
                </ul>

                <ul className="mens-mens">
                  <header>Plus Size</header>
                  {/* <li><a href="#">Briefs & Trunks</a> </li>
                          <li><a href='#'>Boxers</a> </li>
                          <li><a href='#'>Vests</a> </li>
                          <li><a href='#'>Sleepwear & Loungewaer</a>  </li>
                          <li><a href='#'>Thermals</a> </li> */}
                </ul>
              </div>

              {/* col3 */}

              <div className="colm">
                <ul className="mens-mens">
                  <header>Footerwear</header>
                  <li>
                    <a href="#">Casual Shoes</a>{" "}
                  </li>
                  <li>
                    <a href="#">Sports Shoes</a>{" "}
                  </li>
                  <li>
                    <a href="#">Formal Shoes</a>{" "}
                  </li>
                  <li>
                    <a href="#">Sneakers</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="#">Sandal & Floaters</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="#">Flip Flops</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="#">Socks</a>{" "}
                  </li>
                </ul>
                <ul className="mens-mens">
                  <header>Innerwear & Sleepwear</header>

                  <header>Personal Care & Grooming</header>
                  <header>Sunglassers & Frames</header>

                  <header>Watches</header>
                </ul>
              </div>

              {/* col4 */}

              <div className="colm">
                <ul className="mens-mens">
                  {/* <header>Sports & Active Wear</header> */}
                  <header>Sports & Active Wear</header>
                  <li>
                    <a href="#">Sports Shoes</a>{" "}
                  </li>
                  <li>
                    <a href="#">Sports Sandals</a>{" "}
                  </li>
                  <li>
                    <a href="#">Activate T-shirts</a>{" "}
                  </li>
                  <li>
                    <a href="#">Track Pants & Shorts</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="#">Tracksuits</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="#">Jackets & SweatShirts</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="#">Sports Accessories</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="#">Swimwear</a>{" "}
                  </li>
                </ul>

                <ul className="mens-mens">
                  <header>Gadgets</header>
                  <li>
                    <a href="#">smart Wearables</a>{" "}
                  </li>
                  <li>
                    <a href="#">Fitness Gadgets</a>{" "}
                  </li>
                  <li>
                    <a href="#">HeadPhones</a>{" "}
                  </li>
                  <li>
                    <a href="#">Speakers</a>{" "}
                  </li>
                  {/* <li><a href='#'>Thermals</a> </li> */}
                </ul>
              </div>

              {/* col5 */}

              <div className="colm">
                <ul className="mens-mens">
                  <header>Fashion Accessories</header>

                  <li>
                    <a href="#">Wallets</a>{" "}
                  </li>
                  <li>
                    <a href="#">Belts</a>{" "}
                  </li>
                  <li>
                    <a href="#">Perfumes & Body Mists</a>{" "}
                  </li>
                  <li>
                    <a href="#">Trimmers</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="#">Deodorants</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="#">Ties,Cufflinks & Pocket Squares</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="#">Accessory Gift Sets</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="#">Caps & Hats</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="#">Mufflers ,Scarves & Gloves</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="#">Phones Cases</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="#">Helmets</a>{" "}
                  </li>
                </ul>

                <ul>
                  <header>Bags & Backpacks</header>
                  <header>Luggages & Troolleys</header>
                </ul>
              </div>
            </div>
          </div>
        </li>

        {/* women */}
        <li
          className="Women"
          onClick={() => {
            setMenu("Women");
          }}
        >
          {" "}
          <Link to="/Women" className="Women-achor">
            {" "}
            <a href="" style={theme==="light"?{color:"black"}:{color:"white"}}>WOMEN{menu === "Women" ? <></> : <></>}</a>
          </Link>
          <div className="Women-dropmenu" style={theme==="light"?{backgroundColor:"white"}:{backgroundColor:" #c3baf3"}}>
            <div className="Women-dropmenu-conatiner">
              <div className="colw">
                <ul className="Women-Women">
                  <header>Indian & Fusion Wear</header>
                  <li>
                    <a href="#">Kurtas & Suits</a>{" "}
                  </li>
                  <li>
                    <a href="#">Kurtis,Tunics & Tops</a>{" "}
                  </li>
                  <li>
                    <a href="#">Sarees</a>{" "}
                  </li>
                  <li>
                    <a href="#">Ethnic Wear</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="#">Leggings,Salwars & Churidars</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="#">Skirts & Palazzos</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="#"> Dress Materials</a>
                  </li>
                  <li>
                    {" "}
                    <a href="#"> Lehenga Cholis</a>
                  </li>
                  <li>
                    <a href="#">Dupattas & Shawls</a>
                  </li>
                  <li>
                    <a href="#">Jackets</a>
                  </li>
                </ul>

                <ul className="Women-Women">
                  <header>Belts,Scarves & More</header>
                  <header>Watches & Wearables</header>
                </ul>
              </div>

              {/*  women col2 */}

              <div className="colw">
                <ul className="Women-Women">
                  <header>Western Wear</header>
                  <li>
                    <a href="#">Dresses</a>{" "}
                  </li>
                  <li>
                    <a href="#">Tops</a>{" "}
                  </li>
                  <li>
                    <a href="#">Tshirts</a>{" "}
                  </li>
                  <li>
                    <a href="#">Jeans</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="#">Trousers & Capris</a>{" "}
                  </li>
                  <li>
                    <a href="#">Shorts & Skirts</a>{" "}
                  </li>
                  <li>
                    <a href="#">co-ords</a>{" "}
                  </li>
                  <li>
                    <a href="#">Playsuits</a>{" "}
                  </li>
                  <li>
                    <a href="#">Jumpsuits</a>{" "}
                  </li>
                  <li>
                    <a href="#">Shrugs</a>{" "}
                  </li>
                  <li>
                    <a href="#">Sweaters & Sweatershirts</a>{" "}
                  </li>
                  <li>
                    <a href="#">Jackets & Coats</a>{" "}
                  </li>
                  <li>
                    <a href="#">Blazers & Waistcoats</a>{" "}
                  </li>
                </ul>

                <ul className="Women-Women">
                  <header>Innerwear & Sleepwear</header>
                  <header>Plus Size</header>
                </ul>

                {/* header> <ul className='Women-Women'>
                        <header>Plus Size<
                          <li><a href="#">Briefs & Trunks</a> </li>
                          <li><a href='#'>Boxers</a> </li>
                          <li><a href='#'>Vests</a> </li>
                          <li><a href='#'>Sleepwear & Loungewaer</a>  </li>
                          <li><a href='#'>Thermals</a> </li>
                           
                        </ul> */}
              </div>

              {/* women col3 */}

              <div className="colw">
                <ul className="Women-women">
                  <header>Materials</header>
                  <header>Sunglassers & Frames</header>
                </ul>

                <ul className="Women-Women">
                  {/* <header>Sports & Active Wear</header> */}
                  {/* <header>Sports & Active Wear</header> */}
                  <header>Footwear</header>
                  <li>
                    <a href="#">Flats</a>{" "}
                  </li>
                  <li>
                    <a href="#">Casual Shoes</a>{" "}
                  </li>
                  <li>
                    <a href="#">Heels</a>{" "}
                  </li>
                  <li>
                    <a href="#">Boots</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="#">Sports Shoes & Floaters</a>{" "}
                  </li>
                </ul>

                <ul className="Women-Women">
                  <header>Sports & Activate</header>

                  <li>
                    <a href="#">Clothing</a>{" "}
                  </li>
                  <li>
                    <a href="#">Footerwear</a>{" "}
                  </li>
                  <li>
                    <a href="#">Sports Accessories</a>{" "}
                  </li>
                  <li>
                    <a href="#">Sports Equipment</a>{" "}
                  </li>
                </ul>
              </div>

              {/*  women col4 */}

              <div className="colw">
                <ul className="Women-Women">
                  {/* <header>Sports & Active Wear</header> */}
                  <header>Lingerie & Sleepwear</header>
                  <li>
                    <a href="#">Bra</a>{" "}
                  </li>
                  <li>
                    <a href="#">Briefs</a>{" "}
                  </li>
                  <li>
                    <a href="#">Shapewear</a>{" "}
                  </li>
                  <li>
                    <a href="#">Sleepwear & Loungewear</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="#">Swimwear</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="#">Camisoles & Thermals</a>{" "}
                  </li>
                </ul>

                <ul className="Women-Women">
                  <header>Beauty & Personal Care</header>
                  <li>
                    <a href="#">Makeup</a>{" "}
                  </li>
                  <li>
                    <a href="#">Skincare</a>{" "}
                  </li>
                  <li>
                    <a href="#">Premium Beauty</a>{" "}
                  </li>
                  <li>
                    <a href="#">Lipsticks</a>{" "}
                  </li>
                  <li>
                    <a href="#">Fragrances</a>{" "}
                  </li>
                </ul>
              </div>

              {/*  women col5 */}

              <div className="colw">
                <ul className="Women-Women">
                  <header>Gadgets</header>

                  <li>
                    <a href="#">Smart Wearables</a>{" "}
                  </li>
                  <li>
                    <a href="#">Fitness Gadgets</a>{" "}
                  </li>
                  <li>
                    <a href="#">HeadPhones</a>{" "}
                  </li>
                  <li>
                    <a href="#">Speakers</a>{" "}
                  </li>
                </ul>

                <ul>
                  <header>Jewellery</header>

                  <li>
                    <a href="#">Fashion Jewellery</a>{" "}
                  </li>
                  <li>
                    <a href="#">Fine Jewellery</a>{" "}
                  </li>
                  <li>
                    <a href="#">Earrings</a>{" "}
                  </li>
                  {/* <li><a href='#'>Speakers</a>  </li> */}
                </ul>

                <ul>
                  <header>Backpacks</header>
                  <header>Handbags,Bags & Wallets</header>
                  <header>Luggages & Troolleys</header>
                </ul>
              </div>
            </div>
          </div>
        </li>

        {/* kids */}
        <li
          className="Kids"
          onClick={() => {
            setMenu("Kid");
          }}
        >
          <Link to="/Kid" className="Kids-achor">
            {" "}
            <a href="" style={theme==="light"?{color:"black"}:{color:"white"}}>KIDS {menu === "Kids" ? <></> : <></>}</a>
          </Link>

          <div className="Kids-dropmenu" style={theme==="light"?{backgroundColor:"white"}:{backgroundColor:" #c3baf3"}}>
            <div className="Kids-dropmenu-conatiner">
              <div className="colk">
                <ul className="Kids-Kids">
                  <header>Boys Clothing</header>
                  <li>
                    <a href="#">T-Shirts</a>{" "}
                  </li>
                  <li>
                    <a href="#">Shirts</a>{" "}
                  </li>
                  <li>
                    <a href="#">Shorts</a>{" "}
                  </li>
                  <li>
                    <a href="#">Jeans</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="#">Trousers</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="#">Clothing Sets</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="#"> Ethnic Wear</a>
                  </li>
                  <li>
                    {" "}
                    <a href="#"> Track Pants & Pyjamas</a>
                  </li>
                  <li>
                    <a href="#">Jacket ,Sweaters & Sweatershirts</a>
                  </li>
                  <li>
                    <a href="#">Party Wear</a>
                  </li>
                  <li>
                    <a href="#">Innerwear & Thermals</a>
                  </li>
                  <li>
                    <a href="#">Nightwear & Loungewear</a>
                  </li>
                  <li>
                    <a href="#">Value Packs</a>
                  </li>
                </ul>
              </div>

              {/*  kids col2 */}

              <div className="colk">
                <ul className="Kids-Kids">
                  <header>Girls Clothing</header>
                  <li>
                    <a href="#">Dresses</a>{" "}
                  </li>
                  <li>
                    <a href="#">Tops</a>{" "}
                  </li>
                  <li>
                    <a href="#">Tshirts</a>{" "}
                  </li>
                  <li>
                    <a href="#">Clothing Sets</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="#">Lehenga Choli</a>{" "}
                  </li>
                  <li>
                    <a href="#">Kurta Sets</a>
                  </li>
                  <li>
                    <a href="#">Party Wear</a>
                  </li>
                  <li>
                    <a href="#">Dungarees & Jumpsuits</a>
                  </li>
                  <li>
                    <a href="#">Skirts & Shorts</a>
                  </li>
                  <li>
                    <a href="#">Tights & Laggings</a>
                  </li>
                  <li>
                    <a href="#">Jeans,Trousers & Capris</a>
                  </li>
                  <li>
                    <a href="#">Jacket,Sweaters & Sweaters</a>
                  </li>
                  <li>
                    <a href="#">Innerwear & Thermals</a>
                  </li>
                  <li>
                    <a href="#">Nightwear & Loungewear</a>
                  </li>
                  <li>
                    <a href="#">Value Packs</a>
                  </li>
                </ul>
              </div>

              {/* kids col3 */}

              <div className="colk">
                <ul className="Kids-Kids">
                  <header>Footerwear</header>
                  <li>
                    <a href="#">Casual Shoes</a>{" "}
                  </li>
                  <li>
                    <a href="#">Flipflops Shoes</a>{" "}
                  </li>
                  <li>
                    <a href="#">Sports Shoes</a>{" "}
                  </li>
                  <li>
                    <a href="#">Flats</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="#">Sandals</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="#">Heels</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="#">School Shoes</a>{" "}
                  </li>
                  <li>
                    <a href="#">Socks</a>
                  </li>
                </ul>
                <ul className="Kids-Kids">
                  <header>Toys & Games</header>
                  <li>
                    {" "}
                    <a href="#">Learning & Development</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="#">Activity Toys</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="#">Soft Toys</a>{" "}
                  </li>
                  <li>
                    <a href="#">Action Figure/Play set</a>
                  </li>
                </ul>
              </div>

              {/*kids col4 */}

              <div className="colk">
                <ul className="Kids-Kids">
                  {/* <header>Sports & Active Wear</header> */}
                  <header>Infants</header>
                  <li>
                    <a href="#">Bodysuits</a>{" "}
                  </li>
                  <li>
                    <a href="#">Rompers & Sleepsuits</a>{" "}
                  </li>
                  <li>
                    <a href="#">Clothing Sets</a>{" "}
                  </li>
                  <li>
                    <a href="#">Tshirts & Tops</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="#">Dresses</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="#">Bottom wear</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="#">Winter wear</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="#">Innerwear & Sleepwear</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="#">Infant Care</a>{" "}
                  </li>
                </ul>

                <ul className="Kids-Kids">
                  <header>Home & Bath</header>
                  <header>Personal Care</header>
                </ul>
              </div>

              {/*  kids col5 */}

              <div className="colk">
                <ul className="Kids-Kids">
                  <header>Kids Accessories</header>

                  <li>
                    <a href="#">Bags & Backpacks</a>{" "}
                  </li>
                  <li>
                    <a href="#">Watches</a>{" "}
                  </li>
                  <li>
                    <a href="#">Jewellery & Hair Accessory</a>{" "}
                  </li>
                  <li>
                    <a href="#">Sunglassers</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="#">Masks & Protective Gears</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="#">Caps & Hats</a>{" "}
                  </li>
                </ul>

                <ul>
                  <header>Brands</header>
                  <li>
                    <a href="#">H&M</a>{" "}
                  </li>
                  <li>
                    <a href="#">Max Kids</a>{" "}
                  </li>
                  <li>
                    <a href="#">Pantaloons</a>{" "}
                  </li>
                  <li>
                    <a href="#">United Colors Of Benetto</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="#">YK</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="#">U.S Polo Assn.Kids</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="#">Mothercare</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="#">HRX</a>{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </li>

        {/* home and living */}

        <li
          className="Home"
          onClick={() => {
            setMenu("Home");
          }}
        >
          {" "}
          <Link to="/Home" className="Home-achor">
            {" "}
            <a href="" style={theme==="light"?{color:"black"}:{color:"white"}}>HOME & LIVING{menu === "Home" ? <></> : <></>}</a>
          </Link>
          <div className="Home-dropmenu" style={theme==="light"?{backgroundColor:"white"}:{backgroundColor:" #c3baf3"}}>
            <div className="Home-dropmenu-conatiner">
              <div className="col">
                <ul className="Home-Home">
                  <header>Bed Linen & Furnushing</header>
                  <li>
                    <a href="#">Bed Runners</a>{" "}
                  </li>
                  <li>
                    <a href="#">Mattress Protectors</a>{" "}
                  </li>
                  <li>
                    <a href="#">Bedsheets</a>{" "}
                  </li>
                  <li>
                    <a href="#">Bedding Sets</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="#">Blankets,Quilts & Dohars</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="#">Pillows & Pillow Covers</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="#"> Bed Covers</a>
                  </li>
                  <li>
                    {" "}
                    <a href="#"> Diwan Sets</a>
                  </li>
                  <li>
                    <a href="#">Chair Pads & Covers</a>
                  </li>
                  <li>
                    <a href="#">Sofa Covers</a>
                  </li>
                </ul>
                <ul>
                  <header>Flooring</header>
                  <li>
                    <a href="#">Floor Runners</a>{" "}
                  </li>
                  <li>
                    <a href="#">Carpets</a>{" "}
                  </li>
                  <li>
                    <a href="#">Floor Mats & Dharries</a>{" "}
                  </li>
                  <li>
                    <a href="#">Door Mats</a>{" "}
                  </li>
                </ul>
              </div>

              {/*  Home col2 */}

              <div className="col">
                <ul className="Home-Home">
                  <header>Bath</header>
                  <li>
                    <a href="#">Bath Towels</a>{" "}
                  </li>
                  <li>
                    <a href="#">Hand & Face Towels</a>{" "}
                  </li>
                  <li>
                    <a href="#">Beach Towels</a>{" "}
                  </li>
                  <li>
                    <a href="#">Towel Set</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="#">Bath Rugs</a>{" "}
                  </li>
                  <li>
                    <a href="#">Bath Robes</a>
                  </li>
                  <li>
                    <a href="#">Bathroom Accessories </a>
                  </li>
                </ul>

                <ul>
                  <header>Lamps & Lighting</header>
                  <li>
                    <a href="#">Floor Lamps</a>{" "}
                  </li>
                  <li>
                    <a href="#">Ceiling Lamps</a>{" "}
                  </li>
                  <li>
                    <a href="#">Table Lamps</a>{" "}
                  </li>
                  <li>
                    <a href="#">Wall Lamps</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="#">Outer Lamps</a>{" "}
                  </li>
                  <li>
                    <a href="#">String Lights</a>
                  </li>
                  {/* <li><a  href='#'>Bathroom Accessories </a></li> */}
                </ul>
              </div>

              {/* home col3 */}

              <div className="col">
                <ul className="Home-Home">
                  <header>Home Decor</header>
                  <li>
                    <a href="#">Plants & Planters</a>{" "}
                  </li>
                  <li>
                    <a href="#">Aromas & Candles</a>{" "}
                  </li>
                  <li>
                    <a href="#">Clocks</a>{" "}
                  </li>
                  <li>
                    <a href="#">Mirrors</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="#">Wall Decor</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="#">Festive Decor</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="#">Pooja Essentials</a>{" "}
                  </li>
                  <li>
                    <a href="#">Wall Shlves</a>
                  </li>
                  <li>
                    <a href="#">Fountains</a>
                  </li>
                  <li>
                    <a href="#">ShowPieces & Vases</a>
                  </li>
                  <li>
                    <a href="#">Ottaman</a>
                  </li>
                </ul>
                <ul className="Home-Home">
                  <header>Cushions & cushion Covers</header>
                  <header>Curtains</header>
                </ul>
              </div>

              {/*home col4 */}

              <div className="col">
                <ul className="Home-Home">
                  {/* <header>Sports & Active Wear</header> */}
                  <header>Home Gift Sets</header>
                  <header>Kitchen & Table</header>

                  <li>
                    <a href="#">Table Runners</a>{" "}
                  </li>
                  <li>
                    <a href="#">Dinnerware & Serveware</a>{" "}
                  </li>
                  <li>
                    <a href="#">Cups and Mugs</a>{" "}
                  </li>
                  <li>
                    <a href="#">Bakeware & Cookware</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="#">Kitchen Storage & Tools</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="#">Bar & Drinkware</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="#">Table Covers & Furnishing</a>{" "}
                  </li>
                </ul>

                <ul className="Home-Home">
                  <header>Storage</header>

                  <li>
                    <a href="#">Bins</a>{" "}
                  </li>
                  <li>
                    <a href="#">Hangers</a>{" "}
                  </li>
                  <li>
                    <a href="#">Organisers</a>{" "}
                  </li>
                  <li>
                    <a href="#">Hooks & Holders</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="#">Laundry Bags</a>{" "}
                  </li>
                </ul>
              </div>

              {/*  home col5 */}

              <div className="col">
                <ul className="Home-Home">
                  <header>Brands</header>

                  <li>
                    <a href="#">H&M</a>{" "}
                  </li>
                  <li>
                    <a href="#">Marks & Spencer</a>{" "}
                  </li>
                  <li>
                    <a href="#">Home Centre</a>{" "}
                  </li>
                  <li>
                    <a href="#">Spaces</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="#">D'Decor</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="#">Story@Home</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="#">Pure Home & Living</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="#">Swayam</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="#">Raymond Home</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="#">Maspar</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="#">My Trident</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="#">Cortina</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="#">Random</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="#">Ellementry</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="#">SEJ by Nisha Gupta</a>{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </li>
        {/* Beauty */}
        <li
          className="Beauty"
          onClick={() => {
            setMenu("Beauty");
          }}
        >
          {" "}
          <Link to="/Beauty" className="Beauty-achor">
            <a href="#" style={theme==="light"?{color:"black"}:{color:"white"}}>BEAUTY</a> {menu === "Beauty" ? <></> : <></>}
          </Link>
          <div className="Beauty-dropmenu" style={theme==="light"?{backgroundColor:"white"}:{backgroundColor:" #c3baf3"}}>
            <div className="Beauty-dropmenu-conatiner">
              <div className="colb">
                <ul className="Beauty-Beauty">
                  <header>Makeup</header>
                  <li>
                    <a href="#">LipStick</a>{" "}
                  </li>
                  <li>
                    <a href="#">Lip Gloss</a>{" "}
                  </li>
                  <li>
                    <a href="#">Lip liner</a>{" "}
                  </li>
                  <li>
                    <a href="#">Mascara</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="#">Eyeliner</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="#">Kajal</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="#"> Eyeshadow</a>
                  </li>
                  <li>
                    {" "}
                    <a href="#"> Foundation</a>
                  </li>
                  <li>
                    <a href="#">Primer</a>
                  </li>
                  <li>
                    <a href="#">Concealer</a>
                  </li>
                  <li>
                    <a href="#">Compact</a>
                  </li>
                  <li>
                    <a href="#">Nail Polish</a>
                  </li>
                  {/* <li><a  href='#'>Value Packs</a></li> */}
                </ul>
              </div>

              {/*  beauty col2 */}

              <div className="colb">
                <ul className="Beauty-Beauty">
                  <header>Skincare,Bath & Body</header>
                  <li>
                    <a href="#">Face Moisturiser</a>{" "}
                  </li>
                  <li>
                    <a href="#">Cleanser</a>{" "}
                  </li>
                  <li>
                    <a href="#">Masks & Peel</a>{" "}
                  </li>
                  <li>
                    <a href="#">SunScreen</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="#">Serum</a>{" "}
                  </li>
                  <li>
                    <a href="#">Face Wash</a>
                  </li>
                  <li>
                    <a href="#">Eye Cream</a>
                  </li>
                  <li>
                    <a href="#">Lip Balm</a>
                  </li>
                  <li>
                    <a href="#">Body Lotion</a>
                  </li>
                  <li>
                    <a href="#">Body Wash</a>
                  </li>
                  <li>
                    <a href="#">Body Scrub</a>
                  </li>
                  <li>
                    <a href="#">Hand Cream</a>
                  </li>
                </ul>

                <ul>
                  <header>Baby Care</header>
                  <header>Masks</header>
                </ul>
              </div>

              {/* beauty col3 */}

              <div className="colb">
                <ul className="Beauty-Beauty">
                  <header>Haircare</header>
                  <li>
                    <a href="#">Shampoo</a>{" "}
                  </li>
                  <li>
                    <a href="#">Conditioner</a>{" "}
                  </li>
                  <li>
                    <a href="#">Hair Cream</a>{" "}
                  </li>
                  <li>
                    <a href="#">Hair Oil</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="#">Hair Gel</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="#">Hair Color</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="#">Hair Serum</a>{" "}
                  </li>
                  <li>
                    <a href="#">Hair Accessory</a>
                  </li>
                </ul>
                <ul className="Beauty-Beauty">
                  <header>Fragrances</header>
                  <li>
                    {" "}
                    <a href="#">Perfumes</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="#">Deodorant</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="#">Body Mist</a>{" "}
                  </li>
                  {/* <li><a  href='#'>Action Figure/Play set</a></li> */}
                </ul>
              </div>

              {/*kids col4 */}

              <div className="colb">
                <ul className="Beauty-Beauty">
                  {/* <header>Sports & Active Wear</header> */}
                  <header>Appliances</header>
                  <li>
                    <a href="#">Hair Straightener</a>{" "}
                  </li>
                  <li>
                    <a href="#">Hair Dryer</a>{" "}
                  </li>
                  <li>
                    <a href="#">Epilator</a>{" "}
                  </li>
                </ul>

                <ul className="Beauty-Beauty">
                  <header>Men's Grooming</header>
                  <li>
                    <a href="#">Trimmers</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="#">Beard Oil</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="#">Hair Wax</a>{" "}
                  </li>
                </ul>
                <ul className="Beauty-Beauty">
                  <header>Beauty gift & Makeup Set</header>
                  <li>
                    <a href="#">Beauty Gift</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="#">Makeup Kit</a>{" "}
                  </li>
                </ul>

                <ul>
                  <header>Premium Beauty</header>
                  <header>Wellness & Hygiene</header>
                </ul>
              </div>

              {/*  kids col5 */}

              <div className="colb">
                <ul className="Beauty-Beauty">
                  <header>Top Brands</header>

                  <li>
                    <a href="#">Lakme</a>{" "}
                  </li>
                  <li>
                    <a href="#">Maybelline</a>{" "}
                  </li>
                  <li>
                    <a href="#">LOreal</a>{" "}
                  </li>
                  <li>
                    <a href="#">Philips</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="#">Bath & Body Works</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="#">The body Shop</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="#">Biotique</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="#">Mamaearth</a>{" "}
                  </li>

                  <li>
                    {" "}
                    <a href="#">MCaffeine</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="#">Nivea</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="#">Lotus Herbals</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="#">LOreal Professionnel</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="#">KAMA AYURVEDA</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="#">M.A.C</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="#">Forest Essentials</a>{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </li>
        <li
          className="Studio"
          onClick={() => {
            setMenu("Studio");
          }}
        >
          <Link to="Studio">
            {" "}
            <a href="" style={theme==="light"?{color:"black"}:{color:"white"}}>STUDIO{menu === "Studio" ? <></> : <></>}</a>
          </Link>
          <span>NEW</span>
          <div className="Studio-dropmenu">
            <div className="Studio-dropmenu-conatiner">
              <div className="col">
                <ul className="Studio-Studio">
                  <img src={Studio} alt="" className="StudioImg"/>
                </ul>
              </div>
            </div>
          </div>
        </li>
      </div>

      <div className="Nav-input-input ">
        <li className="search-icon-section">
          {" "}
          <BiSearchAlt2 className="Search-icon " />
        </li>
        <li>
          {" "}
          <input
            type="text"
            className="search-input "
            placeholder="Search for products,brands and more"
          />
        </li>
      </div>

      <ul className="">
        <li  className="theme-theme-icon" style={theme==="light"?{color:"black"}:{color:"white"}} onClick={handleTheme}>{theme==='light'?<BiSun className="sun-moon-icon" />:<FaRegMoon className="sun-moon-icon"/>}</li>
      </ul>

      <div className="Nav-about-menu">
        <ul className="ul" onClick={() => setProfileButton(!profilebutton)}>
          <li className="Profile ">
            <Link to="">
              <CiUser className="logo1" style={theme==="light"?{color:"black"}:{color:"white"}} />
            </Link>
          </li>
          <li className="Profile-p" style={theme==="light"?{color:"black"}:{color:"white"}}>Profile</li>

          {profilebutton && (
            <div className="Profile-dropmenu" style={theme==="light"?{backgroundColor:"white"}:{backgroundColor:" #c3baf3"}}>
              <div className="Profile-dropmenu-conatiner">
                <div className="colProfile">
                  <ul className="Profile-Profile">
                    <header>Welcome</header>
                    <li style={{ fontWeight: "400" }}>
                      To access account and manage orders
                    </li>
                    <Link to="/Login">
                      {" "}
                      <button
                        type="Submit"
                        onClick={loginHandler}
                        className="btn-btn"
                      >
                        LOGIN / SIGNUP{menu === "Loghin"}
                      </button>
                    </Link>
                    <hr style={{ marginTop: "10px", marginBottom: "15px" }} />
                  </ul>
                  <ul className="Profile-Profile2">
                    <li>Orders</li>
                    <li>Wishlist</li>
                    <li>Gift Cards</li>
                    <li>Contact Us</li>
                    <li>
                      Myntra Insider <span>NEW</span>
                    </li>

                    <hr style={{ marginTop: "10px", marginBottom: "15px" }} />
                  </ul>

                  <ul className="Profile-Profile2">
                    <li>Myntra Credit</li>
                    <li>Coupons</li>
                    <li>Saved Cards</li>
                    <li>Saved VPA</li>
                    <li>Saved Addresses</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </ul>

        <ul className="ul">
          <Link to="/wishlist">
            <li>
              <CiHeart className="logo2" style={theme==="light"?{color:"black"}:{color:"white"}}/>
            </li>
            <li style={theme==="light"?{color:"black"}:{color:"white"}}>Wishlist</li>
          </Link>
        </ul>

        <ul className="ul navbar-bag">
          {" "}
          <Link to="/Bag">
            {" "}
            <li>
              <HiOutlineShoppingBag className="logo3" style={theme==="light"?{color:"black"}:{color:"white"}} />
            </li>
            <li style={theme==="light"?{color:"black"}:{color:"white"}}>Bag</li>
          </Link>{" "}
          {cart.length === 0 ? (
            <></>
          ) : (
            <span className="totalcartItems">{cart.length}</span>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Navigation;
