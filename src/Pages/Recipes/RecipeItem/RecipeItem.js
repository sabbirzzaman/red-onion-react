import React from 'react';
import './RecipeItem.css'

const RecipeItem = ({recipe}) => {
    const {image, name, instruction} = recipe;

    return (
        <div className='recipe-item'>
            <img src={image} alt={name} />

            <div className="recipe-details">
                <h3>{name}</h3>
                <p>{instruction}</p>

                <div className="recipe-btn">
                    <button>Edit Recipe</button>
                    <button>Delete Recipe</button>
                </div>
            </div>
        </div>
    );
};

export default RecipeItem;