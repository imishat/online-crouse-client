import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const RightSide = () => {
    const [courses,setCourses]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/catagory')
        .then(res=>res.json())
        .then(data=>setCourses(data))
    },[])
    return (
        <div>
             {
               courses.map(courses=><p key={courses.id}>
                   <Link to={`/couress/${courses.id}`}>{courses.name}</Link>
               </p>)
           }

        </div>
    );
};

export default RightSide;