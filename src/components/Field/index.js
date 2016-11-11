import React, { Component } from 'react';
import {FormGroup, FormControl, ControlLabel} from 'react-bootstrap';

class Field extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<FormGroup controlId="formHorizontalPassword">
      <Col componentClass={ControlLabel} sm={2}>
        Password
      </Col>
      <Col sm={10}>
        <FormControl type="password" placeholder="Password" />
      </Col>
    </FormGroup>
		);
	}
}