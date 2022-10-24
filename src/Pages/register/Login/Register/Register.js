import React, { useContext, useState } from 'react';
import { Button, FormText } from 'react-bootstrap';

import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContex } from '../../../../contex/AuthProvider';

const Register = () => {
    const {createUser}=useContext(AuthContex)
    const [error,setError]=useState('')

    const handleSubmit=(event)=>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name,email,password,photoURL)
        createUser(email,password)
        .then(result=>{
            const user=result.user;
            setError('')
            form.reset()
            
        })
        .catch( error=>{console.error(error)
        setError(error.message)})
        

    }
   
    return (
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Full Name</Form.Label>
          <Form.Control name='name' type="text" placeholder="Enter Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Photo URL</Form.Label>
            <Form.Control name="photoURL" type="text" placeholder="Phot URL" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name='email' type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control name='password' type="password" placeholder="Password" />

        </Form.Group>
        <button variant="primary" type="submit" >Register</button>
        <Link to='/login'>Alredy Have Account</Link>
        <FormText>
            <p className='text-info'>{error} </p>
        </FormText>
      </Form>
    );
};

export default Register;