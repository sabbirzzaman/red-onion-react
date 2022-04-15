import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo2.png';
import './SignUp.css';

const SignUp = () => {
    return (
        <div className="form-container">
            <div className="container">
                <img width={250} src={logo} alt="site logo" />

                <div className="form">
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <input type="password" placeholder="Confirm Password" />
                    <input type="button" value="Sign In" />
                </div>
                <Link to='/login'>Already have an account?</Link>
            </div>
        </div>
    );
};

export default SignUp;
