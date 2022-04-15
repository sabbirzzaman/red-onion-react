import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../../images/logo2.png';
import './Header.css';

const Header = () => {
    const navigate = useNavigate();
    
    return (
        <div className="header-container">
            <nav className="container">
                <div className="site-logo">
                    <img
                        onClick={() => navigate('/')}
                        width={120}
                        src={logo}
                        alt="Site logo"
                    />
                </div>

                <div className="navigation">
                    <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                    <Link to="/">Login</Link>
                    <button>Sign Up</button>
                </div>
            </nav>
        </div>
    );
};

export default Header;
