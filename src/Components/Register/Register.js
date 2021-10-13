import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css'
const Register = () => {
    return (
        <div className='register-form'>
            <div>
                <h2>Create Account</h2>
                <form onSubmit=''>
                    <input type="email" name="" id="" placeholder="Your Email" />
                    <br />
                    <input type="password" name="" id="" placeholder='Enter Password' />
                    <input type="password" name="" id="" placeholder='Re-Enter Password' />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>Already Have an Account? <Link to="/login">LogIn</Link></p>
                <div>-------or----------</div>
                <button
                    className="local-button"
                    onClick=''
                >Google Sign In</button>
            </div>
        </div>
    );
};

export default Register;