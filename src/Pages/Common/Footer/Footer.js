import React from 'react';
import './Footer.css'

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();

    return (
        <div className='footer-container'>
            <p>Copyright &copy; {year} Red Onion</p>
        </div>
    );
};

export default Footer;