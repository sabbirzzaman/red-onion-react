import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner-container'>
            <h1>Best foot waiting for you.</h1>
            <div className="search">
                <input type="text" placeholder='Search food items' />
                <button>Search</button>
            </div>
        </div>
    );
};

export default Banner;