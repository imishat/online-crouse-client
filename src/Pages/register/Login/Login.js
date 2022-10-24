
import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { ListGroup } from 'react-bootstrap';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {  FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContex } from '../../../contex/AuthProvider';

const Login = () => {
    const {logIn,providerLogin}=useContext(AuthContex)
    const handelLogin=e=>{
       // e.prevenrDefault()
        e.preventDefault();
        const from=e.target;
        const email=from.email.value;
        const password=from.password.value;
        logIn(email,password)
        .then(result=>{
            const user=result.user
            console.log(user)
        })
        .catch(error=>console.error(error)
        )

    }
    const provider= new GoogleAuthProvider()
    const handelGoogle=()=>{
        providerLogin(provider)
        .then(result=>{
            const user=result.user;

        })
        .catch(error=>console.error(error))

    }



    return (
        <Form onSubmit={handelLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control name="email" type="email" placeholder="Enter email" required />

        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control name="password" type="password" placeholder="Password" required />
        </Form.Group>

        <Button variant="primary" type="submit">

            Login
           
        
        </Button>
        <Link to='/register'>Go to Register</Link>
        <Form.Text className="text-danger">
            
        </Form.Text>
        <div className='mt-3'>
        <ListGroup>
                    <ListGroup.Item onClick={handelGoogle} className='mb-2'><FaGoogle /> Google</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaGithub /> GitHud</ListGroup.Item>
                    
                   
                </ListGroup>
        </div>
    </Form>
        
    );
};

export default Login;