import React from 'react';

import MenuBar from 'pages/MenuBar/MenuBar';
import AppRouter from './AppRouter';
import GithubLoginPage from 'pages/GithubLogin/GithubLoginPage';

function App() {
  return (
    <>
      <MenuBar />
      <AppRouter />
      {/* <GithubLoginPage /> */}
    </>
  );
}

export default App;
