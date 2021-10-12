import React from 'react';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';

import { useState } from 'react';

import LoginPage from './User/LoginPage/LoginPage'
import RegisterPage from './User/RegisterPage/RegisterPage'
import AroundPage from './AroundPage/AroundPage'
import PoolPage from './PoolPage/PoolPage'
import PortfolioPage from './PortfolioPage/PortfolioPage'
const AppRouter = () => {

  return (
    <Router>
      <Switch>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/register">
          <RegisterPage />
        </Route>
        <Route exact path="/around">
          <AroundPage />
        </Route>
        <Route exact path="/pool">
          <PoolPage />
        </Route>
        <Route exact path="/:nickname">
          <PortfolioPage/>
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default AppRouter;
