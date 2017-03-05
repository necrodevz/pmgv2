import React, { Component } from 'react'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
//import store from '../store'
//import syncHistoryWithStore from 'react-router-redux'
import MainLayout from '../layouts/MainLayout'
import CUILayout from '../layouts/CUILayout'
import LoginLayout from '../layouts/LoginLayout'

import Login from '../components/Login'
import Home from '../components/Home'
import About from '../components/About'
import WhyPMG from '../components/WhyPMG'
import BecomeALender from '../components/BecomeALender'
import DashHome from '../components/DashHome'
import ContactUs from '../components/ContactUs'
import NotFound from '../components/NotFound'

var history = browserHistory //syncHistoryWithStore(browserHistory,store);

class Routes extends Component {
	render() {
		return (
			<Router history={history} { ...this.props}>
				<Route path='/dash' component={CUILayout}>
		    		<IndexRoute component={DashHome} />
		    	</Route>
		    	<Route path='/login' component={LoginLayout} >
		    		<IndexRoute component={ Login } />
		    	</Route>
				<Route path='/' component={MainLayout}>
			      	<IndexRoute component={Home} />
			      	<Route path='/about' component={About} />
			      	<Route path='/why-pmg' component={WhyPMG} />
			      	<Route path='/become-a-lender' component={BecomeALender} />
			    	<Route path='/contact-us' component={ContactUs} />
			    
			      	<Route path="*" component={NotFound} />
			    </Route>
			</Router>
		)
	}
}

export default Routes;