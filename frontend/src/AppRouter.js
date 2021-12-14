import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";

import { useState } from "react";

import LoginPage from "pages/LoginPage/LoginPage";
import RegisterPage from "pages/RegisterPage/RegisterPage";
import AroundPage from "pages/AroundPage/AroundPage";
import PoolPage from "pages/PoolPage/PoolPage";
import PortfolioPage from "pages/PortfolioPage/PortfolioPage";
import CallbackPage from "pages/GithubLogin/CallbackPage";
import RepositoryPage from "pages/ProjectPage/RepositoryPage";
import ProjectPage from "pages/ProjectPage/ProjectPage";
import ProjectRegisterPage from "pages/ProjectPage/ProjectRegisterPage";

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <PoolPage />
        </Route>
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
        <Route exact path="/user/:nickname">
          <PortfolioPage />
        </Route>
        {/* <Route exact path="/portfolio">
          <CallbackPage />
        </Route> */}
        <Route exact path="/repository">
          <RepositoryPage />
        </Route>
        <Route exact path="/project">
          <ProjectPage />
        </Route>
        <Route exact path="/project/register/:id">
          <ProjectRegisterPage />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default AppRouter;
