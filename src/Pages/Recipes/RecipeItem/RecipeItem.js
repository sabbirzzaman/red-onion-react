import React from 'react';
import { useNavigate } from 'react-router-dom';
import './RecipeItem.css';

const RecipeItem = ({recipe, deleteRecipe}) => {
    const { _id, image, name, instruction } = recipe;
    const navigate = useNavigate();

    return (
        <div className="recipe-item">
            <img src={image} alt={name} />

            <div className="recipe-details">
                <h3>{name}</h3>
                <p>{instruction}</p>

                <div className="recipe-btn">
                    <button onClick={() => navigate(`/update/${_id}`)}>Edit Recipe</button>
                    <button onClick={() => deleteRecipe(_id)}>
                        Delete Recipe
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RecipeItem;
