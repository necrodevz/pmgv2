import React, { Component } from 'react';
// import logo from './logo.svg';
//import './index.css';
import {FormGroup, FormControl, ControlLabel} from 'react-bootstrap';
//import {InputField} from '../InputField';

class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: {
        key:1,
        label:"Name",
        helptext:"Enter your full name here",
        type:"text", 
        value:""
      },
      email:{
        key:2,
        label:"Email",
        helptext:"Enter a valid email address here",
        type:"email",
        value:""
      },
      message:{
        key:3,
        label:"Message",
        helptext:"Send us a message!",
        type:"textarea",
        value:""
      }
    }
  }
  handleNameChange(e) {
    this.setState({name.value:e.target.value}});
    console.log(this.state);
  }
  handleEmailChange(e) {
    this.setState({email.value:e.target.value});
  }
  handleMessageChange(e) {
    this.setState({message.value:e.target.value}});
  }
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
              <FormControl type="text" placeholder="Enter Name" value={this.state.name.value} onChange={this.handleNameChange} required/>
              <br />
              <ControlLabel>Email: </ControlLabel>
              <FormControl type="email" placeholder="Enter Email" value={this.state.email.value} onChange={this.handleEmailChange} required/>
              <br />
              <ControlLabel>Message: </ControlLabel>
              <FormControl componentClass="textarea" placeholder="Enter Message" value={this.state.message.value} onChange={this.handleMessageChange} required/>
              <br />
              <input type="submit" value="Submit" className="btn btn-primary" required/>
            </FormGroup>
          </div>
        </div>
        {/*
        <div className="col-md-offset-1 col-md-7">
            <iframe className="col-md-12" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps/ms?msa=0&amp;msid=205270552970553628214.0004ea6762866fb3315ed&amp;ie=UTF8&amp;ll=18.008641,-76.749158&amp;spn=0,0&amp;t=m&amp;iwloc=0004ea67661c53b1c9675&amp;output=embed"></iframe>
        </div>
      */}
        <div>
          <div>
            <h1>{this.state.name.value}</h1>
            <br />
            <h3>{this.state.email.value}</h3>
            <br />
            <p>{this.state.message.value}</p>
          </div>
        </div>
      </div>
    );
  }
} 

export default ContactUs;