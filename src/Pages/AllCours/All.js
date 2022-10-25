import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Catagry from '../Catagory/Catagry';

const All = () => {
    const couress = useLoaderData();
    return (
        <div>
            <h1>react</h1>
            {
                couress.map(cours=><Catagry key={cours.category_id} cours={cours}></Catagry>)
            }
        </div>
    );
};

export default All;