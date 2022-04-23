import React from 'react';
import { InfinitySpin } from 'react-loader-spinner';
import { useParams } from 'react-router-dom';
import useFoods from '../../../hooks/useFoods';
import SingleFood from '../SingleFood/SingleFood';
import './FilterItem.css';

const FilterItem = () => {
    // get the food category name
    const { foodCategory } = useParams();

    // fetch the food data with useFoods hook
    const [filterItem] = useFoods('data.json');

    // find the food item by category
    const foodItem = filterItem.find(
        (foods) => foods.category === foodCategory
    );

    // loading animation
    if (!foodItem) {
        return (
            <div className="loading">
                <InfinitySpin color="red" />
            </div>
        );
    }

    // food items
    if (foodItem) {
        return (
            <div className="filter-container">
                {foodItem.foods.map((food) => (
                    <SingleFood key={food.id} food={food}></SingleFood>
                ))}
            </div>
        );
    }
};

export default FilterItem;
