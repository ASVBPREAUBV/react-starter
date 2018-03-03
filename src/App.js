import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom';
import { Main } from './container/Main';
import { Auth } from './container/Auth';
import * as Parse from 'parse';
import { TopNav } from './components/TopNav';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      Parse.User.current() ? (
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
  />
);

const App = () => (
  <Router>
    <div>
      <TopNav />
      <Switch>
        <Route path="/auth" component={Auth} />
        <PrivateRoute path="/" component={Main} />
      </Switch>
    </div>
  </Router>
);

export default App;
