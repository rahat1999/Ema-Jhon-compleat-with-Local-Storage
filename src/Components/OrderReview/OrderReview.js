import React from 'react';
import useProducts from '../../Hooks/useProducts';
import useCart from '../../Hooks/useCart';
import Cart from '../Cart/Cart'
import ReviewItem from '../ReviewItem/ReviewItem'
import { clearTheCart, removeFromDb } from '../../utilities/fakedb'
import { useHistory } from 'react-router';

const OrderReview = () => {
    const [products] = useProducts()
    const [cart, setCart] = useCart(products)
    let history = useHistory();

    const handaleRemove = key => {
        const newCart = cart.filter(cartProduct => cartProduct.key !== key)
        setCart(newCart) // remove from cart
        removeFromDb(key)//remove from storage
    }
    const handaleProceedToShipping = () => {
        history.push('/shipping')
        // setCart([])
        // clearTheCart()
    }

    return (
        <div className='container'>
            <div className='shops-container'>
                {
                    cart.map(cartItem => <ReviewItem
                        key={cartItem.key}
                        handaleRemove={handaleRemove} cartItem={cartItem}>
                    </ReviewItem>)
                }
            </div>

            <div className='cart'>
                <Cart cart={cart}>
                    <button onClick={handaleProceedToShipping} className="local-button">
                        proceed to  Shipping </button>
                </Cart>
            </div>
        </div>
    );
};

export default OrderReview;