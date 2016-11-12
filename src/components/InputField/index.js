import React, { Component } from 'react';
import {FormGroup, FormControl, ControlLabel, Col, Helpblock} from 'react-bootstrap';

class InputField extends Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(e) {
		this.props.onChange(e.target.value);
	}
	render() {
		return (
			<div>
				<FormGroup controlId={ this.props.field.label + "-input-field"}>
			      <Col componentClass={ControlLabel} sm={2}>
			        {this.props.field.label}
			      </Col>
			      <Col sm={10}>
			        <FormControl type={this.props.field.type} placeholder={"Enter " + this.props.field.name} value={this.props.field.value || ""} onChange={this.handleChange} />
			        <FormControl.Feedback />
			      </Col>
			      <Helpblock>{this.props.field.helptext}</Helpblock>
			    </FormGroup>
			</div>
		);
	}
}

export default InputField;