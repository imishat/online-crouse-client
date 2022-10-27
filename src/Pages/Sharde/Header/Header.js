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
                <Image style={{height: '35px'}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSereUx36Ii3UKJHdzGr7rziji6fmFWYOVeRw&usqp=CAU'></Image>

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
                    
                    <Nav.Link>
                       <Link to='/fqa'>FAQ</Link>
                    </Nav.Link>
                </Nav>
                <Nav>
                    {
                        users?.uid?

                      <>
                                        
                                       <div className='m-20'>
                                          <p onClick={handelLogOut} style={{margin:'30px'}}><Link to=''>LogOut</Link></p>
                                       </div>
                                        
                                    </>
                                    :
                                    <>
                                      <div>
                                         
                                          <Link className='me-3' to='/login'>Login</Link>

                                        
                                      
                                        <Link to='/register'>Register</Link>
                                      </div>
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