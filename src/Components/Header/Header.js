import React from 'react';
import "./header.css"
import logo from '../../images/logo.png'
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth()
    console.log(user)
    return (
        <header>
            <div className='logo'>
                <img src={logo} alt="shope banner" />
            </div>
            <nav className='link'>
                <NavLink to="/store">Store</NavLink>
                <NavLink to="/review">Orders Review</NavLink>
                <NavLink to="/inventory">Manage Inventory here</NavLink>
                {
                    user.email ? <NavLink to="login" onClick={logOut}>SingOut</NavLink>
                        : <NavLink to="/login">LogIn</NavLink>
                }
                {user.email && <span className="text-white">{user.email}</span>}
            </nav>
        </header>
    );
};

export default Header;