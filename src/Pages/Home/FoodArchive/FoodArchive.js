import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { InfinitySpin } from 'react-loader-spinner';
import { useParams } from 'react-router-dom';
import useFoods from '../../../hooks/useFoods';
import './FoodArchive.css';

const FoodArchive = () => {
    const { foodId } = useParams();
    const [foods] = useFoods('../singleData.json');

    const singleFood = foods.find(
        (food) => parseInt(food.id) === parseInt(foodId)
    );

    if(!singleFood) {
        return (
            <div className='loading'>
                <InfinitySpin color="red" />
            </div>
        )
    }

    if (singleFood) {
        const { image, name, price, details } = singleFood;

        return (
            <div className="archive-container">
                <div className="container">
                    <div className="food-details">
                        <h2>{name}</h2>
                        <p>{details}</p>
                        <h3>{price}</h3>
                        <button>
                            <FontAwesomeIcon
                                icon={faShoppingCart}
                            ></FontAwesomeIcon>{' '}
                            <span>Add</span>
                        </button>
                    </div>
                    <div className="food-image">
                        <img src={image} alt={name} />
                    </div>
                </div>
            </div>
        );
    }
};

export default FoodArchive;
