import React, { Component} from 'react';
import {FormGroup, FormControl, ControlLabel} from 'react-bootstrap'
//import {submitMessage} from '../../actions'
import axios from 'axios'
import config from '../../config'
//import { Field, reduxForm } from 'redux-form';
//import { connect } from 'react-redux'


class ContactUs extends Component {
  constructor(props) {
    super(props)
    this.state ={
        name:"",
        email:"",
        message:""
      }
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  getInitialState = () => {
    return {
      name:"",
      email:"",
      message:""
    }
  }
  updateMessage(input, state = this.state){
    switch (input.id){
      case "name":
        return {
            name:input.value
        }
      case "email":
        return {
            email:input.value
        }
      case "message":
        return {
            message:input.value
        }
      default:
        return state
    }
  }
  handleChange = (e) => {
    e.preventDefault()
    console.log(e)
    this.setState(this.updateMessage(e.target))
    console.log(this.state)
  }
  handleSubmit = (e) => {
    let message = {}
    e.preventDefault()
    console.log(this.state)
    message = {
      "name":this.state.name,
      "email":this.state.email,
      "message":this.state.message
    }
    this.submitMessage(message)
    this.setState(this.getInitialState())
    //this.props.router.push('/')
  }
  submitMessage(message) {
    this.send(message)
      .then((response) =>{
        console.log(response)
        this.getInitialState()
      })
      .catch((error) => {
        console.log(error)
      })
  /*
  |* To be done: submit message to leads model for CRM management
  |* Or email this to the main entry point for CRM leads
  |*
  */
  
  /*
	axios.post('https://pmg-ruby-necrodevz.c9users.io/leads.json', message)
	  .then((response)=>{
	    console.log(response)
	  })
	  .catch((error)=>{
	    console.log(error.message)
	  })
	
	return function(dispatch) {
		//dispatch(addMessage(message));
		// eslint-disable-next-line
		(message) => {
			return axios.post(config.MAIL_URL, 
				{
					"personalizations": 
						[
							{
								"to": [
									{
							          "email": message.email,
							          "name": message.name
							        }
					      		],
					      		"subject": "Message received from PMG WebApp"
					    	}
					  	],
					  	"from": 
					  		{
								"email": config.SYSTEM_EMAIL
							},
					  	"content": [
					    	{
					      		"type": "text/plain",
					      		"value": message.message
					    	}
					  	]
				},
				{
					// eslint-disable-next-line
					//headers: {`Authorization: Bearer ${config.MAIL_TOKEN}`},
					headers: {'Content-Type': 'application/json'},
				}
			)
			.then((response) => {
	//			sendMessageSuccess()
				console.log(response)
			})
			.catch((error) => {
				console.log(error)
			})
		}
	}
	*/
  }
  send = (message) =>{
    const mailer = require('sendgrid-mailer').config(config.API_KEY);
    //var response = {}
    //Create email data 
    const email = {
      to: 'info@dkblake.com',
      from: message.email,
      subject: 'TEST',
      html: `<p>${message.message}</p>`,
    };
     
    //Send away 
    return mailer.send(email); //Returns promise
//    return response
  }
  render() {
    return (
      <div>
        <div>
          <h2>There is no such thing as a dumb question. Drop us a line or give us a call.</h2>
          <br />
          <p>
            If you'd like to reach us with questions, or to request more information, please see the contact information below. We do our best to provide our valued customers with only the highest-quality loan products, and welcome any comments or suggestions to improve our services or website.
          </p>
        </div>
        <div className="col-md-4">
          <div>
            <form onSubmit={this.handleSubmit}>
              <FormGroup controlId='contact-form'>
                <ControlLabel>Name: </ControlLabel>
                <FormControl type="text" id="name" placeholder="Enter Name" onChange={this.handleChange} value={this.state.message.name} required/>
                <br />
                <ControlLabel>Email: </ControlLabel>
                <FormControl type="email" id="email" placeholder="Enter Email" onChange={this.handleChange} value={this.state.message.email} required/>
                <br />
                <ControlLabel>Message: </ControlLabel>
                <FormControl componentClass="textarea" id="message" placeholder="Enter Message" onChange={this.handleChange} value={this.state.message.message} required/>
                <br />
                <input type="submit" value="Submit" className="btn btn-primary" required/>
              </FormGroup>
            </form>
          </div>
        </div>
        <div className="col-md-offset-1 col-md-7">
            <iframe className="col-md-12" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps/ms?msa=0&amp;msid=205270552970553628214.0004ea6762866fb3315ed&amp;ie=UTF8&amp;ll=18.008641,-76.749158&amp;spn=0,0&amp;t=m&amp;iwloc=0004ea67661c53b1c9675&amp;output=embed"></iframe>
        </div>
      </div>
    );
  }
} 

//var mapStateToProps = (state, ownProps) => {
  //return state.message
//}

export default ContactUs

/*
// Decorate the form component
ContactUs = reduxForm({
  form: 'contact' // a unique name for this form
})(ContactUs);

export default ContactUs;
*/