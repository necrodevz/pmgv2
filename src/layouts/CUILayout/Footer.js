import React from 'react';
//import {Link} from 'react-router';
import {Navbar} from 'react-bootstrap';

const Footer = (props) => {
    return (
        <footer>
			<Navbar fixedBottom inverse fluid>       
		        <div>
		            <p>FOLLOW US: <a href="https://www.facebook.com/ProgressiveMG" target="_blank"><img src="_images/facebook-icon.png" role="presentation"/></a></p>
		        	<p>&copy; 2015 PMG</p>   
		        </div>
		    </Navbar>
		</footer>
     );
} 

export default Footer;