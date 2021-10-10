import React from 'react';
import { NavLink } from 'react-router-dom';

const ReviewItem = (props) => {
    const { name, price, quantity, key } = props.cartItem

    return (
        <div className="main-container">
            <div></div>
            <div >
                <h4>{name}</h4>
                <h4>{price}</h4>
                <h4>QUantity:{quantity}</h4>
                <button onClick={() => props.handaleRemove(key)} className='local-button'>Remove</button>
                <NavLink to='/store'>

                    <button className='local-button' style={{ marginLeft: '15px' }}>Order More</button>
                </NavLink>
            </div>
        </div>
    );
};

export default ReviewItem;