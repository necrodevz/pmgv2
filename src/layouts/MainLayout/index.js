import React, { Component } from 'react';
import {Link} from 'react-router';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import logo from './logo.png';
import './index.css';

const mainStyles = {
	marginTop: '170px',
	marginLeft: 'auto',
	marginRight: 'auto',
	maxWidth: '1200px',
	marginBottom: '100px'
};
const navStyles = {
	//marginTop: '100px',
	height: '140px',
	paddingTop: 'auto',
	paddingBottom: 'auto',
	backgroundColour: 'white'
};
const nav = {
	marginRight: '30px'
};
class MainLayout extends Component {
  render() {
    return (
      <div>
      	<Navbar collapseOnSelect fixedTop fluid style={navStyles}>
      		<img src={logo} className='logo' role="presentation" height="90px"/>
      		<br />
			<Navbar.Header>
				<Navbar.Toggle />
			</Navbar.Header>
			<Navbar.Collapse inverse>
				<Nav pullRight style={nav}>
					<NavItem><Link to="/"><h5>Home</h5></Link></NavItem>
					<NavItem><Link to="/why-pmg"><h5>Why PMG</h5></Link></NavItem>
					<NavItem><Link to="/become-a-lender"><h5>Become a Lender</h5></Link></NavItem>
					<NavItem><Link to="/apply-now"><h5>Apply Now</h5></Link></NavItem>
					<NavItem><Link to="/about"><h5>About PMG</h5></Link></NavItem>
					<NavItem><Link to="/contact-us"><h5>Contact PMG</h5></Link></NavItem>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
		<main id="main" style={mainStyles}>
			{this.props.children}
		</main>
		<footer>
			<Navbar fixedBottom fluid>       
		        <div>
		            <p>FOLLOW US: <a href="https://www.facebook.com/ProgressiveMG" target="_blank"><img src="_images/facebook-icon.png" role="presentation"/></a></p>
		        	<p>&copy; 2015 PMG</p>   
		        </div>
		    </Navbar>
		</footer>
	</div>
    );
  }
}

export default MainLayout;