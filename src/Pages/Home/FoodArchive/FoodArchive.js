import { faMinus, faPlus, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { InfinitySpin } from 'react-loader-spinner';
import { useNavigate, useParams } from 'react-router-dom';
import useFoods from '../../../hooks/useFoods';
import './FoodArchive.css';

const FoodArchive = () => {
    const { foodId } = useParams();
    const [foods] = useFoods('../singleData.json');
    const [quantity, setQuantity] = useState(1);

    const navigate = useNavigate();

    const singleFood = foods.find(
        (food) => parseInt(food.id) === parseInt(foodId)
    );

    if (!singleFood) {
        return (
            <div className="loading">
                <InfinitySpin color="red" />
            </div>
        );
    }

    if (singleFood) {
        const { id, image, name, price, details } = singleFood;

        return (
            <div className="archive-container">
                <div className="container">
                    <div className="food-details">
                        <h2>{name}</h2>
                        <p>{details}</p>
                        <h3>{price}</h3>

                        <div className="add-to-cart">
                            <button onClick={() => navigate(`/checkout/${id}`)}>
                                <FontAwesomeIcon
                                    icon={faShoppingCart}
                                ></FontAwesomeIcon>{' '}
                                <span>Add</span>
                            </button>

                            <div className="food-quantity">
                                <button onClick={() => setQuantity(quantity - 1)} disabled={quantity <= 1 && true}>
                                    <FontAwesomeIcon icon={faMinus}></FontAwesomeIcon>
                                </button>
                                <input
                                    type="text"
                                    value={quantity}
                                    readOnly
                                />
                                <button onClick={() => setQuantity(quantity + 1)} disabled={quantity >= 10 && true}>
                                    <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
                                </button>
                            </div>
                        </div>
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
