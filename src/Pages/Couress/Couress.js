import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Catagry from '../Catagory/Catagry';

const Couress = () => {
    const couress = useLoaderData();
    console.log(couress)
    return (
        <div>
            <h1></h1>
            {
                couress.map(cours=><Catagry key={cours.category_id} cours={cours}></Catagry>)
            }
        </div>
    );
};

export default Couress;