import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import "./Login.css"
const Login = () => {
    const { SingInUsingGoogle } = useAuth()
    const location = useLocation()
    const redirect_uri = location.state?.from || "/store"//বুঝি নাই
    console.log(location)
    const history = useHistory()
    const handleGoogleLogin = () => {
        SingInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }
    return (
        <div className='login-form'>
            <div>
                <h2>Login</h2>
                <form>
                    <input type="email" name="" id="" placeholder="Your Email" />
                    <br />
                    <input type="password" name="" id="" />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>New to ema-john website? <Link to="/register">Create Account</Link></p>
                <div>-------or----------</div>
                <button
                    className="local-button"
                    onClick={handleGoogleLogin}
                >Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;