import React from 'react';
import { Form, FormGroup, FormControl, ControlLabel } from 'react-bootstrap'

const Login = (props) => {
    return (
        <Form controlId="login">
            <FormGroup controlId="email">
                <ControlLabel>Email:</ControlLabel>
                <FormControl type="email" placeholder="Enter email address" />
            </FormGroup>
            <FormGroup controlId="password">
                <ControlLabel>Password:</ControlLabel>
                <FormControl type="password" placeholder="Enter email address" />
            </FormGroup>
            <FormControl type="submit" value="Login" className="primary" />
        </Form>
     );
} 

export default Login;