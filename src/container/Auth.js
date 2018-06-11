import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { Login } from '../components/Auth/Login';
import { Signup } from '../components/Auth/Signup';

export const Auth = ({ match }) => (
  <div>
    <h1>Auth</h1>
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/auth/login">login</Link>
          </li>
          <li>
            <Link to="/auth/signup">signup</Link>
          </li>
        </ul>

        <hr />

        <Route exact path={match.url + '/login'} component={Login} />
        <Route exact path={match.url + '/signup'} component={Signup} />
      </div>
    </Router>
  </div>
);
