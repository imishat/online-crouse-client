import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Catagry from '../Catagory/Catagry';
import ShowAll from '../ShowAll/ShowAll';

const All = () => {
    const couress = useLoaderData();
    return (
        <div>
            <h1>react</h1>
            {
               couress.map(course=><Catagry key={course.catagory_id} cours={course}></Catagry>)
            }
        </div>
    );
};

export default All;