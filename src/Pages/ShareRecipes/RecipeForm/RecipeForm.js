import React from 'react';
import { useForm } from 'react-hook-form';
import './RecipeForm.css';

const RecipeForm = () => {
    const { register, handleSubmit } = useForm();

    // post data to the server side
    const onSubmit = (data) => {
        fetch('http://localhost:5000/recipes', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => console.log(result));
    };

    return (
        <form className="recipe-form" onSubmit={handleSubmit(onSubmit)}>
            <input
                type="text"
                placeholder="Recipe Name"
                {...register('name')}
                required
            />
            <input
                type="text"
                placeholder="Image URL"
                {...register('image')}
                required
            />
            <textarea
                placeholder="Write your recipe here..."
                {...register('instruction')}
                required
            />
            <input type="submit" value="Add Recipe" />
        </form>
    );
};

export default RecipeForm;
