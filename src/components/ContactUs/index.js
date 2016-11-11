import React, { Component } from 'react';
// import logo from './logo.svg';
//import './index.css';
import {FormGroup, FormControl, ControlLabel} from 'react-bootstrap';


class ContactUs extends Component {
  render() {
    return (
      <div>
        <div>
          <h2>There is no such thing as a dumb question. Drop us a line or give us a call.</h2>
          <br />
          <p>
            If you'd like to reach us with questions, or to request more information, please see the contact information above. We do our best to provide our valued customers with only the highest-quality loan products, and welcome any comments or suggestions to improve our services or website.
          </p>
        </div>
        <div className="col-md-4">
          <div>
            <FormGroup controlId='contact-form'>
              <ControlLabel>Name: </ControlLabel>
              <FormControl type="text" placeholder="Enter Name" required/>
              <br />
              <ControlLabel>Email: </ControlLabel>
              <FormControl type="email" placeholder="Enter Email" required/>
              <br />
              <ControlLabel>Message: </ControlLabel>
              <FormControl componentClass="textarea" placeholder="Enter Message" required/>
              <br />
              <input type="submit" value="Submit" className="btn btn-primary" required/>
            </FormGroup>
          </div>
        </div>
        <div className="col-md-offset-1 col-md-7">
            <iframe className="col-md-12" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps/ms?msa=0&amp;msid=205270552970553628214.0004ea6762866fb3315ed&amp;ie=UTF8&amp;ll=18.008641,-76.749158&amp;spn=0,0&amp;t=m&amp;iwloc=0004ea67661c53b1c9675&amp;output=embed"></iframe>
        </div>
      </div>
    );
  }
} 

export default ContactUs;