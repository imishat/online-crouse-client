import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import html2canvas from 'html2canvas';
import{jsPDF} from'jspdf'

const Cours = () => {

    const cours=useLoaderData()
    console.log(cours)
    const {img,name,title}=cours

    return ( 
       
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={img} />
              <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                {title}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
                <Button variant="primary" className='
                me-2 m-3'>Domnlode</Button>
              </Card.Body>
            </Card>
    );
};

export default Cours;