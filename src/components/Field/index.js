import React, { Component } from 'react';
import {FormGroup, FormControl, ControlLabel, Col, Helpblock, SelectControl, Checkbox, Radio} from 'react-bootstrap';

class CheckboxField extends Component {
	constructor(props){
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick(e){
		payload={
			node: this.parent.props.label,
			id: this.props.id,
			value: e.target.value
		};
		
	}
	render() {
		return(
			<FormGroup controlId={this.props.id}>
		      <ControlLabel>{this.props.label}</ControlLabel>
		      <Checkbox {this.props.value} />
		      {this.props.helptext && <HelpBlock>{this.props.helptext}</HelpBlock>}
		    </FormGroup>
		);
	}
}