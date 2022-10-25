import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Catagry = ({cours}) => {
    console.log(cours)
    const{_id,title,name,img}=cours
    return (
        <div>
             <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
         {title}
        </Card.Text>
        <Button variant="primary">
            <Link to={`/cours/${_id}`} className="Text-white">Primiam</Link>
        </Button>
      </Card.Body>
    </Card>
        </div>
    );
};

export default Catagry;