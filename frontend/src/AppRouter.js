import React from 'react';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';

import { useState } from 'react';
import LoginPage from './components/LoginPage/LoginPage';
import AroundPage from './components/AroundPage/AroundPage';
import PoolPage from './components/PoolPage/PoolPage';
import RegisterPage from './components/RegisterPage/RegisterPage';

const AppRouter = () => {

  return (
    <Router>
      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/register">
          <RegisterPage />
        </Route>
        <Route path="/around">
          <AroundPage />
        </Route>
        <Route path="/pool">
          <PoolPage />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default AppRouter;
