import React, { Component} from 'react';
import {FormGroup, FormControl, ControlLabel} from 'react-bootstrap';
import {updateMessage, submitMessage} from '../../actions'
import { connect } from 'react-redux'


class ContactUs extends Component {
  constructor(props) {
    super(props)
    console.log(props)
    this.handleSubmit =  this.handleSubmit.bind(this)
    this.handleChange =  this.handleChange.bind(this)
  }
  handleChange(e) {
    let payload = {}
    e.preventDefault()
    payload = {
      key: e.target.id,
      value: e.target.value
    }
    this.props.dispatch(updateMessage(payload))
    console.log(this.props)
  }
  handleSubmit(e) {
    e.preventDefault()
    submitMessage()
    console.log(this.props)
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
                <FormControl type="text" id="name" placeholder="Enter Name" value={this.props.name} onChange={this.handleChange} required/>
                <br />
                <ControlLabel>Email: </ControlLabel>
                <FormControl type="email" id="email" placeholder="Enter Email" value={this.props.email} onChange={this.handleChange} required/>
                <br />
                <ControlLabel>Message: </ControlLabel>
                <FormControl componentClass="textarea" id="message" placeholder="Enter Message" value={this.props.message} onChange={this.handleChange} required/>
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

var mapStateToProps = (state, ownProps) => {
  return state.message
}

export default connect(mapStateToProps)(ContactUs)