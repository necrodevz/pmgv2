import React, { Component } from 'react';
import img1 from './peer-to-peer-lending-jamaica.jpg';

class BecomeALender extends Component {
	render() {
		return (
			<div className="holder">
				<div className="threeCol">
		        	<h2>Peer to Peer Lending The safe, easy way to invest your money</h2>
		            <img className="topImg" src={img1} alt="peer-to-peer lending module" />
		            <h3>LEND AND EARN GREAT PROFITS!</h3>
		            <p>At Progressive we understand that sometimes life gets in the way. We also understand that most obstacles are tied to a financial need of some kind. We are committed to being the premier provider of financial services to anyone seeking alternative avenues to earning consistent revenue. </p>
		            <p>Risk Assessment - Ensuring quality Borrowers We only lend to qualified borrowers, based on a stringent credit criteria designed to focus on the most creditworthy applicants. The majority of our members use the loans to pay off high interest rate loans, stimulate growth in small business as well as expansion projects.</p>
		            <p>Many of our borrowers will show the following characteristics:</p>
		            <ul className="invest">
		               	<li>Stable employment for over a year</li>
		                <li>Verified Salary Deduction Order signed and stamped by their employer</li>
		                <li>Borrowing up to 50% of their monthly salary* (conditions apply)</li>
		         	</ul>
		            <h3>Lending Options</h3>
		            <p>There are currently two fixed options for our Approved Lenders:</p>
		            <ul className="invest">
		             	<li>6 Month Loan contract - where you can earn up to 9% interest on your principal*</li>
		              	<li>​12 Month Loan contract - with up to 24% interest on your principal*</li>
					</ul>
		        </div>
		    </div>
		);
	}
}

export default BecomeALender;