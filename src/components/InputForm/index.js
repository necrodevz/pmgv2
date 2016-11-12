import React, { Component } from 'react';
//import {FormGroup, FormControl, ControlLabel} from 'react-bootstrap';
import {Input} from '../InputField';

class InputForm extends Component {
	constructor(props) {
		super(props)
	}
	render(){
		return(
			<form id={ this.props.name + "-form" }>
				{this.props.fields.map(field => {
					<Input 
						key={field.key} 
						name={field.name} 
						helptext={field.helptext} 
						value={field.value} 
						onChange={this.props.onChange}
					/>
				})}
			</form>
		);
	}
}

export default InputForm;