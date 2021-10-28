import React from 'react';
import dotenv from 'dotenv';
import 'pages/GithubLogin/styles/GithubLogin.css';
dotenv.config();
const GithubLoginPage = () => {
  const clientId = process.env.REACT_APP_CLIENT_ID;
  const callbackURL = process.env.REACT_APP_REDIRECT_URI;
  const url = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${callbackURL}`;

  return (
    <div id="github-login-div">
      <h2 id="github-login">Github</h2>
      <a id="github-login" href={url}>
        GitHub로 로그인하기
      </a>
    </div>
  );
};
export default GithubLoginPage;
