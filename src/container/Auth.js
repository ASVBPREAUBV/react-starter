import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { Login } from '../components/Auth/Login';
import { Test } from '../components/test';
import { Signup } from '../components/Auth/Signup';
import { TopNav } from '../components/TopNav';

export const Auth = () => (
  <div>
    <h1>Auth</h1>
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/login">login</Link>
          </li>
          <li>
            <Link to="/signup">signup</Link>
          </li>
          <li>
            <Link to="/test">test</Link>
          </li>
        </ul>

        <hr />

        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route path="/test" component={Test} />
      </div>
    </Router>
  </div>
);
