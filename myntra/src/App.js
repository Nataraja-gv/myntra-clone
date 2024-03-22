 import React from 'react';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Shop from './components/pages/shop.jsx'
import Men from './components/pages/Men.jsx'
import Women from './components/pages/Women.jsx'
import Kid from './components/pages/Kid.jsx'
import Home from './components/pages/Home.jsx'
import Login from './components/pages/Login.jsx'
import Beauty from './components/pages/Beauty.jsx'
import Navigation   from './components/Navbar/Navigation.jsx'
import Wishlist from './components/Wishlist/Wishlist.jsx'
import Bag from './components/BagCart/Bag.jsx'
// import SideBar from './components/pages/SideBar.jsx'
 import MensTypeProducts from './components/ItemsCategoryFolder/MensTypeContext.jsx' 
function App() {
  return (
    <div>
     
    <BrowserRouter>
    <Navigation/>
      <Routes>
       
        <Route path="/" element={<Shop/>}></Route>
        <Route path="/Men" element={<Men/>}></Route>
        <Route path="/Women" element={<Women/>}></Route>
        <Route path="/Kid" element={<Kid/>}></Route>
        <Route path="/Home" element={<Home/>}></Route>
        <Route path="/Login" element={<Login/>}></Route>
        <Route path="/Beauty" element={<Beauty/>}></Route>
        <Route path="/wishlist" element={<Wishlist/>}></Route>
        <Route path="/Bag" element={<Bag/>}></Route>


        <Route path={`/men/shirt`} element={<MensTypeProducts/>} category="shirt"></Route>
        <Route path="/Men/tshirt" element={<MensTypeProducts/>} category="Tshirt"></Route>
        <Route path="/jeans" element={<MensTypeProducts/>} category="jeans"></Route>
        
        
      </Routes>
    </BrowserRouter>
      
       {/* <SideBar/> */}

    </div>
  );
}

export default App;
