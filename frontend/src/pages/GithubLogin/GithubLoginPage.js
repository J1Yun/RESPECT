// import React from 'react';
// import dotenv from 'dotenv';
// import 'pages/GithubLogin/styles/GithubLogin.css';
// dotenv.config();
// const GithubLoginPage = () => {
//   const github = {
//     clientId: process.env.REACT_APP_CLIENT_ID,
//     callbackURL: process.env.REACT_APP_REDIRECT_URI,
//     scope: 'repo,user,gist',
//   };
//   const url = `https://github.com/login/oauth/authorize?client_id=${github.clientId}&redirect_uri=${github.callbackURL}&scope=${github.scope}`;

//   return (
//     <div id="github-login-div">
//       <h2 id="github-login">Github</h2>
//       <a id="github-login" href={url}>
//         GitHub 연동하기
//       </a>
//     </div>
//   );
// };
// export default GithubLoginPage;
