import React from 'react';
import './Item.css'


const Item = (props) => {
    return (
        <div className='Item-conatiner'>
            <img src='' alt=''/>
            <div className=''>
                <p>{props.title}</p>
                <p>{props.description}</p>
                <p>{props.newPrice}</p>
                <p>{props.oldPRice}</p>
                <p>{props.offer}</p>
            </div>
            
        </div>
    );
}

export default Item;
