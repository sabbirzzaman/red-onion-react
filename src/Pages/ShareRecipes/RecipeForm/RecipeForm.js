import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './RecipeForm.css'

const RecipeForm = () => {
    const [recipe, setRecipe] = useState({});

    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => setRecipe(data);

    console.log(recipe);

    return (
        <form className='recipe-form' onSubmit={handleSubmit(onSubmit)}>
            <input
                type="text"
                placeholder="Recipe Name"
                {...register('name')}
                required
            />
            <input
                type="text"
                placeholder="Image URL"g
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
