import React from 'react';
import { Accordion } from 'react-bootstrap';

const Blogs = () => {
    return (
        <Accordion defaultActiveKey={['0']} alwaysOpen className='mx-auto'>
      <Accordion.Item eventKey="0">
        <Accordion.Header> what is cors?</Accordion.Header>
        <Accordion.Body>
         <h1 className='text-info' >Cross-origin resource sharing </h1>
         <p>
         Cross-origin resource sharing (CORS)
          In this section, we will explain what cross-origin </p><p>resource sharing (CORS) is, describe some common examples of cross-origin resource sharing based</p> <p> attacks,and discuss how to protect against these attacks. This topic was written in collaboration with </p> <p>PortSwigger Research, who popularized this attack class with the presentation
         </p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Why are you using firebase? What other options do you have to implement authentication?
           

       </Accordion.Header>
        <Accordion.Body>
        <h3 className='text-info'>Why are you using firebase:</h3>
            <p>
            Thanks to Firebase's easy-to-use SDK, ready-made UI libraries, and backend services, it is possible to set up the whole authentication process in just a couple of minutes. Firebase allows users to authenticate with their phone number, email, Google, and Facebook accounts (more options can be found here)
            </p>
            <h3 className='text-info'>What other options do you have to implement authentication?</h3>
            <p>1:Implement a central repository with well-defined whitelisting policies. ... </p>
            <p>2:Solve self-generated scripts. ... </p>
            <p>3:Withdraw your departing employees' digital rights. ...</p>
          
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>How does the private route work? </Accordion.Header>
        <Accordion.Body>
          <p>
          The react private route component renders child components ( children ) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.
          </p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header> What is Node? How does Node work?

       </Accordion.Header>
        <Accordion.Body>
          <p>
          It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive
          </p>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    );
};

export default Blogs; 