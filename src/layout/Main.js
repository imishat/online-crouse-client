import React from 'react';
import { Outlet } from 'react-router-dom';
import LeftSide from '../Pages/LeftSide/LeftSide';
import RightSide from '../Pages/RightSide/RightSide';
import Header from '../Pages/Sharde/Header/Header';

const Main = () => {
    return ( 
       <div>
        
        <Header> </Header> 
        <div className="row">
            <div className="col">
                <RightSide></RightSide>

            </div>
            <div className="col">
                <Outlet></Outlet>

            </div>
            <div className="col">
                <LeftSide></LeftSide>

            </div>
        </div>


        
        </div>
    );
};

export default Main;