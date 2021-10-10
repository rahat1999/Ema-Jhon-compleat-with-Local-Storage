import React from 'react';
import "./header.css"
import logo from '../../images/logo.png'
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <div className='logo'>
                <img src={logo} alt="shope banner" />
            </div>
            <nav className='link'>
                <NavLink to="/store">Store</NavLink>
                <NavLink to="/review">Orders Review</NavLink>
                <NavLink to="/inventory">Manage Inventory here</NavLink>
            </nav>
        </header>
    );
};

export default Header;