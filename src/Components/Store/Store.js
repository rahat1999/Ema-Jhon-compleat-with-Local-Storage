/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Products/Product';
import './Store.css'

const Store = () => {
    const [products, setProduct] = useState([]);
    const [cart, setCart] = useState([])

    // console.log(products)
    useEffect(() => {
        fetch('./products.json')
            .then(res => res.json())
            .then(data => {
                setDisplayProducts(data)
                setProduct(data)
            })
    }, [])

    // serch matc product from storage
    useEffect(() => {

        if (products.length) {
            const saveCard = getStoredCart();
            const storeCart = []
            for (const key in saveCard) {
                const addedProduct = products.find(product => product.key === key)

                if (addedProduct) {
                    const quantity = saveCard[key]
                    addedProduct.quantity = quantity;
                    storeCart.push(addedProduct)
                }
            }
            setCart(storeCart)
        }

    }, [products])

    //handale button
    const handleAddToCard = (product) => {

        const exists = cart.find(findProduct => findProduct.key === product.key)
        let newCart = []
        if (exists) {
            const restPd = cart.filter(findRestPd => findRestPd.key !== product.key)
            exists.quantity = exists.quantity + 1;
            newCart = [...restPd, exists]
        }
        else {
            product.quantity = 1;
            newCart = [...cart, product]
        }

        // const newCart = [...cart, product]
        setCart(newCart)
        addToDb(product.key)//set data in local storage
    }

    // search box // products to be rendered on the UI 
    const [displayProducts, setDisplayProducts] = useState([])
    const handleSearch = (event) => {
        const searchProducts = (event.target.value)
        const searchResult = products.filter(product => product.name.toLowerCase().includes(searchProducts.toLowerCase()));
        setDisplayProducts(searchResult)
        // console.log(searchResult.length)
    }
    return (
        <main>
            <div className='search-box'>
                <input
                    onChange={handleSearch}
                    type="text" placeholder='Search Products' />
                <span style={{ color: 'white', marginLeft: '4px' }}><b>Match item: {displayProducts.length}</b></span>
            </div>
            <div className="container">
                <div className='shops-container'>
                    {/* <h1>Total: {products.length}</h1> */}
                    {
                        displayProducts.map(product => <Product key={product.key} product={product}
                            handleAddToCard={handleAddToCard} />)
                    }
                </div>
                <div className='cart'>
                    <Cart cart={cart}>
                        <Link to="/review"> <button className="local-button"> Review Your Order </button></Link>
                    </Cart>
                </div>
            </div>
        </main>
    );
};

export default Store;