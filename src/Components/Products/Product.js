import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
import Rating from 'react-rating';

const Product = (props) => {
    // console.log(props)
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    const { name, img, seller, stock, price, star } = props.product;
    return (
        <main className='main-container'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='item-header'>
                <h4 className='product-name'>{name}</h4>
                <p><small>by: {seller}</small></p>
                <div>
                    <div>
                        <h4>Price: ${price}</h4>
                        <p>only {stock} left in stock - order soon</p>
                        <button onClick={() => props.handleAddToCard(props.product)}
                            className="local-button">{element} Add to Cart</button>
                    </div>
                    <div>
                        <Rating
                            initialRating={star}
                            readonly
                            emptySymbol="far fa-star fa-1x"
                            fullSymbol="fa fa-star fa-1x"
                        ></Rating>
                    </div>
                </div>

            </div>
        </main>
    );
};

export default Product;