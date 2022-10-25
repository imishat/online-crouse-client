import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import LeftSide from '../Pages/LeftSide/LeftSide';
import RightSide from '../Pages/RightSide/RightSide';
import Footer from '../Pages/Sharde/Footer/Footer';
import Header from '../Pages/Sharde/Header/Header';

const Main = () => {
    return ( 
       <div>
        
        <Header> </Header> 
       
        <Row>
            <Col lg="2" className='mx-auto' >
            <RightSide></RightSide>
            </Col>
            <Col lg="5" >
            <Outlet></Outlet>
            
            </Col>
            <Col lg="4">
            <LeftSide></LeftSide>
            
            </Col>
        </Row>
       
        <Footer></Footer>


        
        </div>
    );
};

export default Main;