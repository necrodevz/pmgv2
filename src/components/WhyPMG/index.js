import React, { Component } from 'react';
// import logo from './logo.svg';
import img1 from './documents_letters.png';
import img2 from './no_paperwork.png';
import img3 from './affordable-loans.png';
import img4 from './loans-protected.png';
import img5 from './quick-loans.png';
import img6 from './trusted-loan-website.png';
import img7 from './flexibilility-loan-repayment.png';

class WhyPMG extends Component {
  render() {
    return (
      <div classNameName="container-fluid">
        <div>
          <div className="row">
            <img src={img1} alt="loan-documentation"/>
            <h2>Consider the Convenience of Short-term Borrowing</h2>
            <p>What good is a short-term financial solution if it isn't customized to your specific needs? You wouldn't buy a one-size-fits-all shirt, so why would you be content with a lending service that doesn't offer flexible borrowing options? Learn more about the benefits of relying on us to pair you with the best lenders in the business. You will see why we are a leading authority when it comes to unsecured lending solutions.</p>
            <p>When you are doing your research, be sure to remember that not all resources are created equal. We have helped countless consumers take control of their situation and can do the same for you</p>
          </div>
          <div className="row">
            <ul className="list-group list-unstyled">
              <li className="col-md-4 col-sm-6">
                <img src={img2} alt="No Paperwork for Loans" />
                <h3>Forget the Paperwork</h3>
                <p>Gone are the days when consumers would have to drive across town to a brick-and-mortar payday loan store, stand in line and fill out complicated paperwork in order to get the money they needed. The online alternative offers convenient service at your fingertips every hour of the day! All you need to do is complete a simple, secure online application to get started.</p>
              </li>
              <li className="col-md-4 col-sm-6">
                <img src={img3} alt="Affordable Loans" />
                <h3>Rates You Can Afford</h3>
                <p>We have carefully analysed the services and rates currently offered by other money lenders and constantly review and adjust our offerings to ensure you will have access to the lowest rates in the business. This means more money in your pocket and a loan that you can live with.</p>
              </li>
              <li className="col-md-4  col-sm-12">
                <img src={img4} alt="Loan Information is protected" />
                <h3>Your Information is Protected</h3>
                <p>When you use our streamlined application form to request funds, your personal information is protected by advanced security measures designed to keep it safe at all times. You don't want to worry about identity theft when requesting funds, so we want you to feel confident at all times when you use our free service.</p>
              </li>
            </ul>
          </div>
          <div className="row">
            <ul className="list-group list-unstyled">
              <li className="col-md-4 col-sm-6">
                <img src={img5} alt="Quick turn around time on loans" />
                <h3>Fast Service</h3>
                <p>You don't have time to wait around for an approval, and we understand this sense of urgency. This is why we have partnered with trustworthy and reliable courier service providers who pride themselves in offering quick, convenient deliveries so you can take control of your finances expediently.</p>
              </li>
              <li className="col-md-4 col-sm-6">
                <img src={img6} alt="Trusted Loan Website" />
                <h3>We Are a Trusted Company</h3>
                <p>When it comes to working with a provider, you need to know you can trust who you borrow from. We want you to feel confident throughout the entire process, which is why we have spent a considerable amount of time establishing a network of the best names in the business. Our reputation depends on it!!</p>
              </li>
              <li className="col-md-4 col-sm-12">
                <img src={img7} alt="Flexible Loan Repayment Plans" />
                <h3>Flexible Borrowing Options</h3>
                <p>We are extremely diverse in our offerings and can offer you many different types of products including auto title options, advances, paycheck and secured or unsecured loans, and more.</p>                   
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
} 

export default WhyPMG;