import React from 'react';
import CartItem from '../CartItem/CartItem';
import './Cart.css';

const Cart = () => {
    return (
        <>
            <div className="cart-title">
                <h4>From McDonald's</h4>
                <p>Will arrive in 20 minutes.</p>
            </div>
            <CartItem></CartItem>
            <button>Place order</button>
        </>
    );
};

export default Cart;
