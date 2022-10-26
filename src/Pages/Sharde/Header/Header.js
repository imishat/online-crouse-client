import React, { useContext, useState } from 'react';
import { Container, Image, Nav, Navbar } from 'react-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, NavLink } from 'react-router-dom';
import { FaIdBadge, FaUser } from 'react-icons/fa'
import { Button } from 'bootstrap';
import { AuthContex } from '../../../contex/AuthProvider';
import { Switch } from 'antd';

const Header = () => {
   const {users,logout}=useContext(AuthContex)
   //console.log(users.default)

   const handelLogOut=()=>{
       logout()
       .then(()=>{}
       )
       .catch(error=>console.error(error))
   }
   const [state,setState]=useState(false)
   const toggle =()=>{
       state?setState(false):setState(true)
   }


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
                        <Link to='/'>Course</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <NavLink to='/blogs' className='isactive?color:red:color:black'>
                        Blogs
                        </NavLink>
                    </Nav.Link>
                    <Nav.Link>
                       <div>
                           <Switch onClick={toggle}/>
                           {
                               state?<span>Light Mode</span>:<span>Dark Mode</span>
                           }

                           

                       </div>


                    </Nav.Link>
                    <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                      
                    </NavDropdown>
                </Nav>
                <Nav>
                    {
                        users?.uid?

                      <>
                                        <span className='m-4'>{users?.displayName}</span>
                                       <div>
                                          <p onClick={handelLogOut}><Link to=''>LogOut</Link></p>
                                       </div>
                                        
                                    </>
                                    :
                                    <>
                                        <Link to='/login'>Login</Link>
                                        <Link to='/register'>Register</Link>
                                    </>
                  
                    }
                     <Link to='/'>
                            {users?.photoURL ?
                                <Image
                                    style={{ height: '30px' }}
                                    roundedCircle
                                    src={users?.photoURL} title={users.displayName}>
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