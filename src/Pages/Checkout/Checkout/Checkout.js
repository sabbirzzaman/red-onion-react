import React from 'react';
import Cart from '../Cart/Cart';
import CheckoutForm from '../CheckoutForm/CheckoutForm';
import './Checkout.css';

const Checkout = () => {
    return (
        <div className="checkout">
            <div className="container">
                <div className="checkout-form">
                    <CheckoutForm></CheckoutForm>
                </div>

                <div className="cart">
                    <Cart></Cart>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
