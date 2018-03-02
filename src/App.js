import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import { Main } from './container/Main';
import { Auth } from './container/AuthContainer';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      //fakeAuth.isAuthenticated
      true ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/auth',
            state: { from: props.location }
          }}
        />
      )
    }
    p
  />
);

const App = () => (
  <Router>
    <div>
      <Route path="/auth" component={Auth} />
      <PrivateRoute path="/prod" component={Main} />
    </div>
  </Router>
);

export default App;
