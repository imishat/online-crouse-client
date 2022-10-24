import React, { useContext, useState } from 'react';
import { Container, Image, Nav, Navbar } from 'react-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, NavLink } from 'react-router-dom';
import { FaUser } from 'react-icons/fa'
import { Button } from 'bootstrap';
import { AuthContex } from '../../../contex/AuthProvider';

const Header = () => {
    const {user}=useContext(AuthContex)
    return (
        <Navbar collapseOnSelect className='mb-4' expand="lg" bg="light" variant="light">
        <Container>
            <Navbar.Brand>

                E-Coruse
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link>
                        <Link>Course</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <NavLink to='/blogs' className='isactive?color:red:color:black'>
                        Blogs
                        </NavLink>
                    </Nav.Link>
                    <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                            Another action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">
                            Separated link
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav>
                    <>
                    {
                            user?.uid ?
                                <>
                                    <span>{user?.displayName}</span>
                                    <Button variant="light" >Log out</Button>
                                </>
                                :
                                <>
                                    <Link to='/login'>Login</Link>
                                    <Link to='/register'>Register</Link>
                                </>
                        }


                    </>
                    <Link>
                        {user?.photoURL ?
                            <Image
                                style={{ height: '30px' }}
                                roundedCircle
                                src={user?.photoURL}>
                            </Image>
                            : <FaUser></FaUser>
                        }
                    </Link>
                </Nav>
               
            </Navbar.Collapse>
        </Container>
    </Navbar>
    );
};

export default Header;