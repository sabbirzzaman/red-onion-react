import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link, useNavigate, useMatch, useResolvedPath } from 'react-router-dom';
import logo from '../../../images/logo2.png';
import './Header.css';

const Header = () => {
    function CustomLink({ children, to, ...props }) {
        let resolved = useResolvedPath(to);
        let match = useMatch({ path: resolved.pathname, end: true });

        return (
            <div>
                <Link
                    style={{ color: match ? '#f91944' : '' }}
                    to={to}
                    {...props}
                >
                    {children}
                </Link>
            </div>
        );
    }

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
                    <CustomLink to="/login">Login</CustomLink>
                    <button onClick={() => navigate('signup')}>Sign Up</button>
                </div>
            </nav>
        </div>
    );
};

export default Header;
