import React from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import useFoods from '../../../hooks/useFoods';
import './UpdateRecipe.css';

const UpdateRecipe = () => {
    // get id form path
    const { recipeId } = useParams();

    // get recipe item data
    const [recipe] = useFoods(`http://localhost:5000/recipe/${recipeId}`);

    // get recipe name
    const { name } = recipe;

    const { register, handleSubmit } = useForm();

    // update recipe data
    const onSubmit = (data) => {
        const url = `http://localhost:5000/recipe/${recipeId}`;

        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => console.log(data));
    };

    return (
        <div className="update-container">
            <div className="container">
                <h4>Updating: {name}</h4>
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
            </div>
        </div>
    );
};

export default UpdateRecipe;
