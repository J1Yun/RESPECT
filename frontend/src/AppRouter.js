import React from 'react';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';

import { useState } from 'react';

import LoginPage from 'pages/LoginPage/LoginPage';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
import AroundPage from 'pages/AroundPage/AroundPage';
import PoolPage from 'pages/PoolPage/PoolPage';
import PortfolioPage from 'pages/PortfolioPage/PortfolioPage';
import CallbackPage from 'pages/GithubLogin/CallbackPage';
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
<<<<<<< HEAD
        <Route exact path="/profile">
          <PortfolioPage/>
=======
        <Route exact path="/user/:nickname">
          <PortfolioPage />
        </Route>
        {/* <Route exact path="/portfolio">
          <CallbackPage />
        </Route> */}
        <Route exact path="/repository">
          <RepositoryPage />
>>>>>>> dac3956e079dd6a634a4b334e37bb98677415ef3
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default AppRouter;
