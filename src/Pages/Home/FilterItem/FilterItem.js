import React from 'react';
import { useParams } from 'react-router-dom';
import useFoods from '../../../hooks/useFoods';
import SingleFood from '../SingleFood/SingleFood';
import './FilterItem.css'

const FilterItem = () => {
    const { foodName } = useParams();

    const [filterItem] = useFoods();

    const foodCategory = filterItem.find((foods) => foods.name === foodName);

    if(foodCategory) {
        return (
            <div className='filter-container'>
                {foodCategory.foods.map((food) => (
                    <SingleFood key={food.id} food={food}></SingleFood>
                ))}
            </div>
        );
    }
};

export default FilterItem;
