import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import useFoods from '../../../hooks/useFoods';
import './FoodsFilter.css';

const FoodsFilter = () => {
    const [filterItems] = useFoods();

    return (
        <div className="food-container">
            <div className="container">
                <div className="filter-toggle">
                    {filterItems?.map((filterItem) => (
                        <Link key={filterItem._id} to={filterItem.name}>
                            {filterItem.name}
                        </Link>
                    ))}
                </div>

                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default FoodsFilter;
