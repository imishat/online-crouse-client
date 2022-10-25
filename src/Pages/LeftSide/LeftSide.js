
import React from 'react';
import Accordion from 'react-bootstrap/Accordion';


const LeftSide = () => {
    return (
        <>
       <div>
       <h1>Frequently Asked Questions (FAQ)</h1>
       </div>
        <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>1. What do you offer? </Accordion.Header>
        <Accordion.Body>
        On our platform you will find industry focused live batches with task based curriculum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header> 2. Are the courses prerecorded?</Accordion.Header>
        <Accordion.Body>
        No, all our courses are live. You can join live courses from your dashboard at scheduled times.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header> 3. How to join batch?</Accordion.Header>
        <Accordion.Body>
        Register on the platform, select your preferred skill and schedule and join the batch by paying.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>4. Will I get a certificate? </Accordion.Header>
        <Accordion.Body>
        You will get a certificate after completing all course homework, assignments and projects
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>5. How long are your classes?</Accordion.Header>
        <Accordion.Body>
        Our classes are 1-2 hours long.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header>6. How do I become an instructor?</Accordion.Header>
        <Accordion.Body>
        If you want to participate with us in Bangladesh's skilled manpower revolution, email - instructor@E-Lerning.app
        </Accordion.Body>
      </Accordion.Item>
    
    </Accordion>
    </>
    );
};

export default LeftSide;