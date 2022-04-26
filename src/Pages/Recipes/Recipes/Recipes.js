import React from 'react';
import useFoods from '../../../hooks/useFoods';
import RecipeItem from '../RecipeItem/RecipeItem';
import './Recipes.css';

const Recipes = () => {
    // get recipe data
    const [recipes, setRecipes] = useFoods('http://localhost:5000/recipes');

    // delete recipe data
    const handleDeleteRecipe = (id) => {
        const url = `http://localhost:5000/recipe/${id}`;

        fetch(url, {
            method: 'DELETE',
        })
            .then((res) => res.json())
            .then((data) => {
                const remainingRecipes = recipes.filter(recipe => recipe._id !== id)
                setRecipes(remainingRecipes)
            });
    };

    return (
        <div className="recipe-container">
            <div className="container">
                {recipes.map((recipe) => (
                    <RecipeItem
                        key={recipe._id}
                        recipe={recipe}
                        deleteRecipe={handleDeleteRecipe}
                    ></RecipeItem>
                ))}
            </div>
        </div>
    );
};

export default Recipes;
