import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo2.png'

const Login = () => {
    return (
        <div className="form-container">
            <div className="container">
                <img width={250} src={logo} alt="site logo" />

                <div className="form">
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <input type="button" value="Login" />
                </div>
                <Link to='/login'>Don't have an account?</Link>
            </div>
        </div>
    );
};

export default Login;