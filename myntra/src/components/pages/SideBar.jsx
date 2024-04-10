import React, { useState } from 'react';
// import './styles/SideBar.css';
import  bar1 from '../images/bar1.png'
import bar2 from '../images/bar2.png';
 
import { Link } from 'react-router-dom';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";



const SideBar = ({open}) => {
const [mendropopen ,setMenDropOpen] =useState(false) 
const [womendropopen,setWomenDropOpen] =useState(false)
const [Kiddropopen,setKidDropOpen] =useState(false)
const [homedropopen,setHomeDropOpen] =useState(false)
const [beautydropopen,setBeautyDropOpen] =useState(false)



    return (
        <div className= {open ?'SideBar-container showSidebar':'SideBar-container'}>
           <div className='SideBar-image'>
            <img src={bar1} alt="" className='bar1'/>
           </div>

           <ul className='SideBar-Menu'>
            <li><Link to="/Men">   Men </Link><span> {!mendropopen?<MdOutlineKeyboardArrowRight onClick={()=>setMenDropOpen(props=>!props)} className='Dropdown-arrow1'/>:<MdKeyboardArrowDown className='Dropdown-arrow1' onClick={()=>setMenDropOpen(props=>!props)} />}
                     {mendropopen &&  <div className='Mens-dropdown-menu'>
                        <div className='Top-wear-container'>
                            <p>Topwear <MdOutlineKeyboardArrowRight className='menarrowsub1' /></p>
                        </div>

                        <div className='indian-wear-container'>
                            <p>Indian & Festive Wear <MdOutlineKeyboardArrowRight className='menarrowsub2' /></p>
                        </div>

                        <div className='plus-wear-container'>
                            <p> Plus Size <MdOutlineKeyboardArrowRight className='menarrowsub3' /></p>
                        </div>


                        <div className='Footer-wear-container'>
                            <p>Footerwear <MdOutlineKeyboardArrowRight className='menarrowsub4' /></p>
                        </div>

                        <div className='Personal-wear-container'>
                            <p>Personal Care & Grooming <MdOutlineKeyboardArrowRight className='menarrowsub5' /></p>
                        </div>
                     </div>}
            </span></li>



            <li><Link to="/Women"><a href=''>Women</a></Link>  <span>{!womendropopen? <MdOutlineKeyboardArrowRight onClick={()=>setWomenDropOpen(props=>!props)} className='Dropdown-arrow2' />:<MdKeyboardArrowDown onClick={()=>setWomenDropOpen(props=>!props)} className='Dropdown-arrow2'  />}
             {womendropopen && <div className='Women-dropdown-menu'>
                        <div className='WFusion-wear-container'>
                            <p>Indian  & Fusion Wear <MdOutlineKeyboardArrowRight className='womenarrowsub1' /></p>
                        </div>

                        <div className='WWatches-wear-container'>
                            <p>Watches & Wearables <MdOutlineKeyboardArrowRight className='womenarrowsub2' /></p>
                        </div>

                        <div className='WBelts-wear-container'>
                            <p> Belts,Scarves & More<MdOutlineKeyboardArrowRight className='womenarrowsub3'  /></p>
                        </div>


                        <div className='WPlus-wear-container'>
                            <p>Plus Size <MdOutlineKeyboardArrowRight className='womenarrowsub4'  /></p>
                        </div>

                        <div className='maternity-wear-container'>
                            <p>maternity <MdOutlineKeyboardArrowRight  className='womenarrowsub5' /></p>
                        </div>
                     </div>
                     
                     }
            </span></li>


            <li><Link to ="/Kid">Kids</Link>  <span> {!Kiddropopen ?<MdOutlineKeyboardArrowRight onClick={()=>setKidDropOpen(props=>!props)}  className='Dropdown-arrow3'/>:<MdKeyboardArrowDown onClick={()=>setKidDropOpen(props=>!props)} className='Dropdown-arrow3'  />}
             {Kiddropopen && <div className='Kids-dropdown-menu'>
                        <div className='Boys-wear-container'>
                            <p> Boys Clothing <MdOutlineKeyboardArrowRight className='kidarrowsub1' /></p>
                        </div>

                        <div className='Girls-wear-container'>
                            <p> Girls Clothing <MdOutlineKeyboardArrowRight className='kidarrowsub2'/></p>
                        </div>

                        <div className='Kfooter-wear-container'>
                            <p> Footerwear<MdOutlineKeyboardArrowRight className='kidarrowsub3'/></p>
                        </div>


                        <div className='Toys-wear-container'>
                            <p> Toys & Games<MdOutlineKeyboardArrowRight className='kidarrowsub4'/></p>
                        </div>

                        <div className='Age-wear-container'>
                            <p> Age<MdOutlineKeyboardArrowRight className='kidarrowsub5' /></p>
                        </div>
                     </div>}
            
            </span></li>




            <li><Link to="/Home"> Home & Living </Link><span>{!homedropopen? <MdOutlineKeyboardArrowRight onClick={()=>setHomeDropOpen(props =>!props)} className='Dropdown-arrow4' />:<MdKeyboardArrowDown onClick={()=>setHomeDropOpen(props=>!props)} className='Dropdown-arrow4'  />}
             {homedropopen && <div className='Home-dropdown-menu'>
                        <div className='Bed-Furnishing-container'>
                            <p> Bed Linen & Furnishing <MdOutlineKeyboardArrowRight className='homearrowsub1' /></p>
                        </div>

                        <div className='Flooring-container'>
                            <p> Flooring <MdOutlineKeyboardArrowRight className='homearrowsub2'/></p>
                        </div>

                        <div className='Bath-Bath-container'>
                            <p> Bath<MdOutlineKeyboardArrowRight className='homearrowsub3' /></p>
                        </div>


                        <div className=' Lamps-container'>
                            <p>  Lamps & Lighting<MdOutlineKeyboardArrowRight className='homearrowsub4'/></p>
                        </div>

                        <div className='Home-container'>
                            <p>Home Decor<MdOutlineKeyboardArrowRight className='homearrowsub5'/></p>
                        </div>
                     </div>}
            
            
            </span></li>




            <li><Link to="/Beauty"> Beauty </Link><span>{!beautydropopen? <MdOutlineKeyboardArrowRight className='Dropdown-arrow5'  onClick={()=>setBeautyDropOpen(props=>!props)}/>:<MdKeyboardArrowDown onClick={()=>setBeautyDropOpen(props=>!props)} className='Dropdown-arrow5'  />}
             {beautydropopen && <div className='Beauty-dropdown-menu'>
                        <div className='Makeup-container'>
                            <p> Makeup <MdOutlineKeyboardArrowRight className='Beautyarrowsub1'/></p>
                        </div>

                        <div className='Skincare-container'>
                            <p>Skincare,Bath & Body<MdOutlineKeyboardArrowRight className='Beautyarrowsub2'/></p>
                        </div>

                        <div className='Babycare-container'>
                            <p>Baby Care<MdOutlineKeyboardArrowRight className='Beautyarrowsub3'/></p>
                        </div>


                        <div className=' Masks-container'>
                            <p> Masks<MdOutlineKeyboardArrowRight className='Beautyarrowsub4'/></p>
                        </div>

                        <div className='Haircare-container'>
                            <p>Haircare<MdOutlineKeyboardArrowRight className='Beautyarrowsub5'/></p>
                        </div>
                     </div>
            }
            
            </span></li>
            <hr/>
           </ul>
         
         <ul className='SideBar-Menu2'>
             <li>Myntra Studio <button>NEW</button></li>
             <li>Myntra Mall <button>NEW</button></li>
             <li>Myntra Insider</li>
             <li>Gift Cards</li>
             <li>Contact US</li>
             <li>FAQs</li>
             <li>Legal</li>
         </ul>

         <div className='Footer-image'>
            <img src={bar2} alt="" className='bar2'/>
         </div>

         
            
        </div>
    );
}

export default SideBar;
