import React, { Component } from 'react';
import Header from './Header'
import Footer from './Footer'
import './index.css';
import logo from './logo.png'

class CUILayout extends Component {
	
    render() {
    	return (
	        <div>
	            <Header props={{logo:logo}} />
	            { this.props.children }
	            <Footer />
	        </div>
	     );
    }
} 

export default CUILayout;