
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { ListGroup } from 'react-bootstrap';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {  FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContex } from '../../../contex/AuthProvider';

const Login = () => {
    const {logIn,providerLogin,gitProvider}=useContext(AuthContex)
    const[error,setError]=useState('')
    const navigate=useNavigate();
    const location=useLocation();
   
   
   // const from=location.state?.from?pathname||'/';
 const fromm = location.state?.from?.pathname || '/';


    const handelLogin=(event)=>{
      
        event.preventDefault();
        const from=event.target;
        const email=from.email.value;
        const password=from.password.value;
        logIn(email,password)
        .then(result=>{
            const user=result.user
            console.log(user)
            from.reset()
            setError('')
            navigate(fromm,{replace:true})
        })
        .catch(error=>{console.error(error)
            setError(error.meassage)
         })


    }
    //add google login
    const provider= new GoogleAuthProvider()
    const handelGoogle=()=>{
        providerLogin(provider)
        .then(result=>{
            const user=result.user;

        })
        .catch(error=>{
            console.error(error)
            setError(error.meassage)
        })
        



        

    }
    //github login
    const gitprovider=new GithubAuthProvider()
    const git=()=>{
        gitProvider(gitprovider)
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
        <p><Link to='/register'>Go to Register</Link></p>
        <Form.Text className="text-danger">
           
            
        </Form.Text>
        <div className='mt-3'>
        <ListGroup>
                    <ListGroup.Item onClick={handelGoogle} className='mb-2'><FaGoogle /> Google</ListGroup.Item>
                    <ListGroup.Item onClick={git} className='mb-2'><FaGithub /> GitHud</ListGroup.Item>
                    
                    <p className='text-info'>{error}</p>
                </ListGroup>
        </div>
    </Form>
        
    );
};

export default Login;