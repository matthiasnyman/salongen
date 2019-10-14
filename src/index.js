import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import App from './App';
import Salong from './components/salong';
import NotFound from './components/notfound';
import './index.css';


ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/"  render={()=> <App />} />
      <Route path="/salon/:id" component={Salong} />
      <Route render={()=> <NotFound />} />
    </Switch>
  </Router>,
  document.getElementById('root')
);