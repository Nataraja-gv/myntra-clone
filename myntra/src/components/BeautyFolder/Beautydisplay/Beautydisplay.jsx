import React from 'react';
import './Beautydisplay.css'
import Beautyproducts from '../BeautyProducts/BeautyProducts.jsx';
// import greenstar from './greenstar.png'
import { IoIosArrowForward } from "react-icons/io";

const Beautydisplay = () => {
    return (
        <div className='Beauty-card-Container'>
          <div className='Beauty-card-content'>
             {
                Beautyproducts.map((item ,index)=>{
                    return(
                    <div className='Card-Card-Beauty'>
                      
                        <div className='Card-Card-Image'>
                        <img src={item.Image} alt='' className='Beauty-Product-image'/>
                        </div>
                        <div className='beauty-deatils-beauty'> 
                        <div className='rating-rate'>
                            <p><span> {item.rating}</span><img src={item.greenstar} alt="" className='greenstar'/><span> {item.popular}</span></p>
                        </div>
                        <div className='Bauty-Product-title'>
                            <header>{item.Title}</header>
                        </div>


                        <div className='Beauty-Product-Discription'>
                            <header>{item.Discription}</header>
                        </div>


                        <div className='Beauty-Product-amount'>
                            <p className='newamount'>{item.newAmount}</p>
                            <p className='oldamount'>{item.oldAmount}</p>
                            <p className='offer'>{item.offer}</p>
                        </div>

                        </div>
                        </div>    
                     
                    )
                })
             }
          </div>


          <hr className='Beauty-hr'/>

          <div className='pagination-pagination'>
            <div className='page'>
                <p>Page 1 of 1986</p>
            </div>


            <div className='Pagination-number'>
            
                <button className='one'>1</button>
                <button className='two'>2</button>
                <button className='three'>3</button>
                <button className='four'>4</button>
                <button className='five'>5</button>
                <button className='six'>6</button>
                <button className='seven'>7</button>
                <button className='eight'>8</button>
                <button className='nine'>9</button>
                <button className='ten'>10</button>


                


            </div>

            <div className='pagination-next'>
                <button><p>NEXT <IoIosArrowForward  className='arrow-next'/></p> </button>
            </div>
          </div>

        </div>
            
         
    );
}

export default Beautydisplay;
