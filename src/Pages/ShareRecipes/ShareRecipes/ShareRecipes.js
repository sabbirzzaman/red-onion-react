import React from 'react';
import RecipeForm from '../RecipeForm/RecipeForm';
import './ShareRecipes.css';

const ShareRecipes = () => {
    return (
        <div className="share-recipe-container">
            <div className="container">
                <div className="share-recipe">
                    <h3>Share Your Recipe</h3>
                    <RecipeForm></RecipeForm>
                </div>
            </div>
        </div>
    );
};

export default ShareRecipes;
