  
import React from 'react';
import ReactDOM from 'react-dom';
import Form from 'react-bootstrap/Form';





function Signup() {

    
    
    axios({
        method: 'post',
        url: url + "/signup",
        data: {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            password: document.getElementById("password").value,
            // phone: document.getElementById("phone").value,
            // gender: document.getElementById("gender").value
            
            
        },withCredentials: true
        
    }).then(function (response) {
        console.log(response.data.message);
        alert(response.data.message);
        window.location.href = "login.html"
    })
    
    .catch(function (error) {
        console.log(error);
        alert(response.message)
    });
  

    
    return(
    
        <div>
        <h1>Signup</h1>
        <Form>

  <Form.Group controlId="formGroupEmail">
    <Form.Label>Name:</Form.Label>
    <Form.Control type="name" id="name" placeholder="Enter email" />
  </Form.Group>

  <Form.Group controlId="formGroupEmail">
    <Form.Label>Email:</Form.Label>
    <Form.Control type="email" id="email" placeholder="Enter email" />
  </Form.Group>

  <Form.Group controlId="formGroupPassword">
    <Form.Label>Password:</Form.Label>
    <Form.Control type="password" id="password" placeholder="Password" />
  </Form.Group>

</Form>
</div>
)
}

export default Signup;