import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SingleFood.css'

const SingleFood = ({food}) => {
    const {id, image, name, price} = food;
    const navigate = useNavigate();

    return (
        <div onClick={() => navigate(`/food/${id}`)} className='food-item'>
            <img width={200} src={image} alt={name} />
            <p>{name}</p>
            <h3>{price}</h3>
        </div>
    );
};

export default SingleFood;