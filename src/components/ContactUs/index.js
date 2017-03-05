import React, { Component } from 'react'
import ContactForm from '../ContactForm'
import {connect} from 'react-redux'
import { toggleLeadSubmit, createLead } from '../../actions'
//import { LEAD_RESET } from '../../actionTypes'
import {reset} from 'redux-form' 

class ContactUs extends Component {
    constructor(props) {
        super(props)
        this.submit = this.submit.bind(this)
    }
    onValid = () => {
        if(this.props.canSubmit === false) {
            this.props.dispatch(toggleLeadSubmit)
        }
    }
    onInvalid = () => {
        if(this.props.canSubmit === true) {
            this.props.dispatch(toggleLeadSubmit)
        }
    }
    submit(p) {
        //let payload = JSON.stringify(p)
        this.props.dispatch(createLead(p))
        this.props.dispatch(reset('contact'))
    }
    
    render() {
        
        return (
            <div>
                <div className='col-md-offset-3 col-md-6'>
                    <ContactForm  onSubmit={this.submit}  />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ...state.lead 
    }
}

export default connect(mapStateToProps)(ContactUs)