import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { Login } from '../components/Auth/Login';
import { Test } from '../components/test';

export const Auth = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/login">login</Link>
        </li>
        <li>
          <Link to="/test">test</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/login" component={Login} />
      <Route path="/test" component={Test} />
    </div>
  </Router>
);
