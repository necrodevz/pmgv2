import React, { Component } from 'react';
import Header from './Header'
import Footer from './Footer'
import SideNav from './SideNav'
import './index.css';
import logo from './logo.png'

class CUILayout extends Component {
	bodyStyle = {
		marginTop: '100px'
	}
    render() {
    	return (
	        <div>
	            <Header props={{logo:logo}} />
	            <div className='container' style={this.bodyStyle}>
		            <div className='col-md-3'>
		            	<SideNav />
		            </div>
		            <div className='col-md-9'>
		            	{ this.props.children }
		            </div>
	            </div>
	            <Footer />
	        </div>
	     );
    }
} 

export default CUILayout;