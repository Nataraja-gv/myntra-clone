import React, { useContext } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./components/pages/shop.jsx";
import Men from "./components/pages/Men.jsx";
import Women from "./components/pages/Women.jsx";
import Kid from "./components/pages/Kid.jsx";
import Home from "./components/pages/Home.jsx";
import Login from "./components/pages/Login.jsx";
import Beauty from "./components/pages/Beauty.jsx";
import Navigation from "./components/Navbar/Navigation.jsx";
import Wishlist from "./components/Wishlist/Wishlist.jsx";
import Bag from "./components/BagCart/Bag.jsx";
// import SideBar from './components/pages/SideBar.jsx'
import Product from "./components/BeautyProducts/Product.jsx";
import CartBag from "./components/CartToBag/CartBag.jsx";
import MensTypeProducts from "./components/ItemsCategoryFolder/MensTypeProducts.jsx";
import WishlistProduct from "./components/WishlistProducts/WishlistProduct.jsx";
import Footer from "./components/Footer/Footer.jsx";
import useOnline from "./components/utilits/useOnline.jsx";
import Offline from "./components/pages/offline.jsx";
import { ThemeContext } from "./components/ThemeContext/Theme.jsx";
function App() {
  const {theme}=useContext(ThemeContext)
  const online = useOnline();

  if (!online) {
    return <Offline />;
  }

  const appStyle = {
    background: theme === 'light' ? '#fff' : '#adadeb',
     
    
    
  };
  return (
    <div style={appStyle}>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Shop />}></Route>
          <Route path="/Men" element={<Men />}></Route>
          <Route path="/Women" element={<Women />}></Route>
          <Route path="/Kid" element={<Kid />}></Route>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/Beauty" element={<Beauty />}></Route>
          <Route path="/wishlist" element={<WishlistProduct />}></Route>
          <Route path="/Bag" element={<CartBag />}></Route>

          <Route path="/Product" element={<Product />}>
            <Route path=":ProductId" element={<Product />} />
          </Route>
        </Routes>
      </BrowserRouter>

      {/* <SideBar/> */}
    </div>
  );
}

export default App;
