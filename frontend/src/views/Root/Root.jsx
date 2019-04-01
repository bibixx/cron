import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import AuthProvider from '../../components/AuthProvider';

import PrivateRoute from '../../components/PrivateRoute';

import Login from '../Login';
import CronList from '../CronList';

const Root = () => (
  <AuthProvider>
    <Router>
      <Switch>
        <PrivateRoute
          exact
          path="/"
          component={CronList}
          publicComponent={Login}
        />
      </Switch>
    </Router>
  </AuthProvider>
);

export default Root;
