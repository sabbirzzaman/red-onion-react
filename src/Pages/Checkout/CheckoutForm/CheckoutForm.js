import React from 'react';
import { useForm } from 'react-hook-form';
import './CheckoutForm.css';

const CheckoutForm = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => console.log(data);

    return (
        <>
            <div className="checkout-title">
                <h3>Edit delivery details</h3>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="Enter your name" {...register('name')} />
                <input
                    type="email"
                    placeholder="Enter your email"
                    {...register('email')}
                />
                <input placeholder="Your location" {...register('location')} />
                <textarea
                    placeholder="Add delivery instruction"
                    {...register('instruction')}
                />
                <input type="submit" value="Save & Continue" />
            </form>
        </>
    );
};

export default CheckoutForm;
