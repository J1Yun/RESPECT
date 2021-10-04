import React from 'react';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import AroundPage from './components/AroundPage/style/AroundPage';
import PoolPage from './components/PoolPage/style/PoolPage';
import Login from './testfolder/Login';

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
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
