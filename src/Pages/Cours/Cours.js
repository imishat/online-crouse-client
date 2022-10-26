import React, { useRef } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useReactToPrint } from 'react-to-print';



const Cours = () => {

    const cours=useLoaderData()
    console.log(cours);
    const {img,name,title,category_id,_id}=cours;
    const componentRef=useRef();
    const handlePrint=useReactToPrint({
      content:()=>componentRef.current,
      documentTitle:'emp-data',
      onAfterPrint:()=>alert('printed')



    })



    return ( 

       <div ref={componentRef}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={img} />
              <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                {title}
                </Card.Text>
                <Button variant="info"><Link to={`/couress/${category_id}`}>Go Back</Link></Button>
                <Button onClick={ handlePrint} variant="primary" className='
                me-2 m-3'>Downlode</Button>
              </Card.Body>
            </Card>
            </div>
    );
};

export default Cours;