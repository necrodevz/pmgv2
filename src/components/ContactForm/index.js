import React from 'react';
import Input from '../Input'
import { Field, reduxForm } from 'redux-form' 
import validate from '../../validators/contact'

let ContactForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} onValid={props.onInvalid} onInvalid={props.onInvalid}>
            <Field component={Input} name="name" type='text' placeholder='Full Name' label='Name' />
            <Field component={Input} name="email" type='email' placeholder='Email Address' label='Email' />
            <Field component={Input} name="message" componentClass='textarea' placeholder='Message' label='Message' />
            <button type="submit" className='btn btn-primary'>Submit</button>
        </form>
     );
} 

export default reduxForm({
  form: 'contact',// a unique name for this form
  validate
})(ContactForm);