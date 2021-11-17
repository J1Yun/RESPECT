import React from 'react';
import dotenv from 'dotenv';
import 'pages/GithubLogin/styles/githubpassport.css';
dotenv.config();

const githubpassport = () => {
  var form = document.createElement('form');
  form.setAttribute('method', 'post');
  form.setAttribute('action', 'localhost:3000/github');
  document.charset = 'utf-8';
  document.body.appendChild(from);
  form.submit();
};

export default githubpassport;
