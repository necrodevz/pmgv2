import React, { Component } from 'react';
import logo from './logo.svg';
//import {Slider} from 'react-slick';
import './index.css';

class Home extends Component {
  render() {
    return (
      <div className="App">
        
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to PMG</h2>
          <h3>This site is currently being upgraded</h3>
        </div>
        
      </div>
    );
  }
} 

export default Home;
