import React from 'react';

import MenuBar from 'pages/MenuBar/MenuBar';
import AppRouter from './AppRouter';
import GithubLoginPage from 'pages/GithubLogin/GithubLoginPage';

import './App.css';
function App() {
  return (
    <>
      <MenuBar />
      <AppRouter />
    </>
  );
}

export default App;
