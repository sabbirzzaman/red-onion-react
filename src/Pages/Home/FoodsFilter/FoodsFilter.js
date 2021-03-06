import React from 'react';
import { Link, Outlet, useMatch, useResolvedPath } from 'react-router-dom';
import useFoods from '../../../hooks/useFoods';
import './FoodsFilter.css';

const FoodsFilter = () => {
    // fetch data form useFood Hook
    const [filterItems] = useFoods('data.json');

    // set active route
    function CustomLink({ children, to, ...props }) {
        let resolved = useResolvedPath(to);
        let match = useMatch({ path: resolved.pathname, end: true });

        return (
            <div>
                <Link
                    className={`toggle ${match ? 'active' : ''}`}
                    style={{ color: match ? '#f91944' : '' }}
                    to={to}
                    {...props}
                >
                    {children}
                </Link>
            </div>
        );
    }

    return (
        <div className="food-container">
            <div className="container">
                <div className="filter-toggle">
                    {filterItems?.map((filterItem) => (
                        <CustomLink
                            key={filterItem._id}
                            to={filterItem.category}
                        >
                            {filterItem.category}
                        </CustomLink>
                    ))}
                </div>

                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default FoodsFilter;
