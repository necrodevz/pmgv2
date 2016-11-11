import React, { Component } from 'react';
// import logo from './logo.svg';
//import {Slider} from 'react-slick';
import woman from './woman.png';
import './index.css';

let buffer = {
  marginTop: '150px',
  marginLeft: '520px'
};
class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div id="indexTop">    
          <div className="holder">
            <div>
              <div className="col-md-4">
                <img src={woman} role="presentation" height="500px"/>
              </div>       
              <form id="homeForm" className="col-md-offset-1 col-md-7">
                <h2>Get Quick Cash Loans</h2>
                <h4 className="top">Money can be in your</h4>
                <h4>account the next day</h4>
              </form>
            </div>
          </div>
        </div>
      <br />
      <br />
      <div id="topBanner" style={buffer}>
        <div className="col">
          <h4>Flexible Terms</h4>
          <p>Borrow from $10,000 to $150,000.</p>
        </div>
        <div className="col center">
          <h4>Hassle Free Process</h4>
          <p>No collateral/guarantor needed to qualify for a loan.</p>        
        </div>
        <div className="col">
          <h4>Low Interest Rates</h4>
          <p>Know what you’re paying and when you’re paying it.</p>        
        </div>
        <div className="col">
          <h4>Important Information</h4>
          <p>Applicants must be residents of Jamaica and should be at least 18 years of age. Repayments are made by Salary Deductions only. Interest rate varies based on credit worthiness of the applicant.  We reserve the right to refuse any application.</p>
        </div>
      </div>
    </div>
    );
  }
} 

export default Home;
