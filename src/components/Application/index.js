//import Horizon from '@horizon/client';
import React, { Component } from 'react';
import {FormGroup, FormControl, ControlLabel} from 'react-bootstrap';
import Ajax from 'react-ajax';

class Application extends Component {
	constructor(props) {
		super(props);

		getInitialstate: () => {
			horizon = Horizon({host: 'devel.pmgjamaica.com:8181'});

		}
	}
	componentDidMount() {

	}

}

export default Application;