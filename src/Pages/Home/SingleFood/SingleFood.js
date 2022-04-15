import React from 'react';
import './SingleFood.css'

const SingleFood = ({food}) => {

    return (
        <div className='food-item'>
            <img width={200} src={food.image} alt={food.name} />
            <p>{food.name}</p>
            <h3>{food.price}</h3>
        </div>
    );
};

export default SingleFood;