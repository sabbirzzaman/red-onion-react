import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useParams } from 'react-router-dom';
import useFoods from '../../../hooks/useFoods';
import './CartItem.css';

const CartItem = () => {
    const { id } = useParams();
    const [foods] = useFoods('../singleData.json');

    const foodItem = foods.find((food) => parseInt(id) === parseInt(food.id));

    if (foodItem) {
        return (
            <div className="cart-items">
                <div className="cart-details">
                    <img src={foodItem.image} alt={foodItem.name} />
                    <div>
                        <p>
                            <b>{foodItem.name}</b>
                        </p>
                        <h4>{foodItem.price}</h4>
                        <p>
                            <small>Delivery Free</small>
                        </p>
                    </div>
                </div>
                <div className="cart-remove">
                    <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                </div>
            </div>
        );
    }
};

export default CartItem;
