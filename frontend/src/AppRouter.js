import React from 'react';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';

import { useState } from 'react';

import LoginPage from 'pages/LoginPage/LoginPage';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
import AroundPage from 'pages/AroundPage/AroundPage';
import PoolPage from 'pages/PoolPage/PoolPage';
import PortfolioPage from 'pages/PortfolioPage/PortfolioPage';
import RepositoryPage from 'pages/ProjectPage/RepositoryPage';

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
          <PortfolioPage />
        </Route>
        <Route exact path="/repository">
          <RepositoryPage />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default AppRouter;
