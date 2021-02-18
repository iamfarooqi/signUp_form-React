  
import React from 'react';
import ReactDOM from 'react-dom';
import Form from 'react-bootstrap/Form';





function Signup() {

    
    
    
    return(
    
        <div>
        <h1>Signup</h1>
        <Form>

  <Form.Group controlId="formGroupEmail">
    <Form.Label>Name:</Form.Label>
    <Form.Control type="name" placeholder="Enter email" />
  </Form.Group>

  <Form.Group controlId="formGroupEmail">
    <Form.Label>Email:</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>

  <Form.Group controlId="formGroupPassword">
    <Form.Label>Password:</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>

</Form>
</div>
)
}

export default Signup;