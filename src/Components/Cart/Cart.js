import React from 'react';
import "./Cart.css"


const Cart = (props) => {
    const { cart } = props
    // console.log(props.children)

    let addPriceToCart = 0;
    let totalQuantity = 0;
    for (const cart of props.cart) {
        if (!cart.quantity) {
            cart.quantity = 1;
        }
        addPriceToCart = addPriceToCart + cart.price * cart.quantity;
        totalQuantity = totalQuantity + cart.quantity
    }
    const shippng = !cart.length ? 0 : 25
    const tax = (0.10 * addPriceToCart);
    const grandTotal = addPriceToCart + shippng + tax;
    return (
        <div className='cart-item'>
            <h2>Order Summary</h2>
            <p>Items ordered: {totalQuantity}</p>
            <p>price :${addPriceToCart.toFixed(2)}</p>
            <p>Shiping : ${shippng}</p>
            <p>10% Tax :${tax.toFixed(2)}</p>
            <p>Tota Price : ${grandTotal.toFixed(2)}</p>
            {props.children}

        </div>
    );
};

export default Cart;