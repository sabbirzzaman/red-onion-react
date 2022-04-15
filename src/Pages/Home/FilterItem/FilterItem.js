import React from 'react';
import { useParams } from 'react-router-dom';
import useFoods from '../../../hooks/useFoods';
import SingleFood from '../SingleFood/SingleFood';
import './FilterItem.css'

const FilterItem = () => {
    const { foodCategory } = useParams();
    const [filterItem] = useFoods('data.json');

    const foodItem = filterItem.find((foods) => foods.category === foodCategory);

    if(foodItem) {
        return (
            <div className='filter-container'>
                {foodItem.foods.map((food) => (
                    <SingleFood key={food.id} food={food}></SingleFood>
                ))}
            </div>
        );
    }
};

export default FilterItem;
