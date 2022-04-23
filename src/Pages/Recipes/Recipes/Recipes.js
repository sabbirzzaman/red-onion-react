import React, { useEffect, useState } from 'react';
import RecipeItem from '../RecipeItem/RecipeItem';
import './Recipes.css'

const Recipes = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/recipes')
        .then(res => res.json())
        .then(data => setRecipes(data))
    }, [])

    console.log(recipes)

    return (
        <div className='recipe-container'>
            <div className="container">
                {recipes.map(recipe => <RecipeItem key={recipe._id} recipe={recipe}></RecipeItem>)}
            </div>
        </div>
    );
};

export default Recipes;