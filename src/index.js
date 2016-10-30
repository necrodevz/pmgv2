import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import MainLayout from './layouts/MainLayout';
import Home from './components/Home';
import About from './components/About';
import './index.css';
// import '//maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css';
// import '//maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap-theme.min.css';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={MainLayout}>
    	<IndexRoute component={Home} />
    	<Route path='/about' component={About} />
    </Route>
  </Router>,
  document.getElementById('root')
);
