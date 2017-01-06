import React, {Component} from 'react'
import Routes from './routes'
import {Provider} from 'react-redux'
import store from './store'


class PmgApp extends Component {
	render() {
		return(
			<Provider store={ store } >
				<Routes {...this.props} />
			</Provider>
		)
	}
}

export default PmgApp;