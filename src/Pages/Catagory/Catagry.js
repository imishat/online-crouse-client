import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Catagry = ({cours}) => {
  
    const{_id,title,name,img,category_id}=cours
    return (
        <div className='mt-2'>
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
         {title}
        </Card.Text>
        <Button variant="info">
            <Link to={`/cours/${_id}`} className="Text-white">Premimum Access</Link>
        </Button>
      </Card.Body>
       </Card>
             
        </div>
    );
};

export default Catagry;