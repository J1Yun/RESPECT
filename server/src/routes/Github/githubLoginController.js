const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();

exports.githubLogin = async function (req, res) {
  const github = {
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    code: req.body.code,
  };
  var accessToken, currentGithubUser;
  try {
    const { data } = await axios({
      method: 'post',
      url: `https://github.com/login/oauth/access_token?client_id=${github.clientId}&client_secret=${github.clientSecret}&code=${github.code}`,
      headers: {
        accept: 'application/json',
      },
    });
    accessToken = data.access_token;
  } catch (err) {
    console.log(err);
  }
  try {
    const userInfo = await axios({
      method: 'get',
      url: `https://api.github.com/user`,
      headers: {
        Authorization: `token ${accessToken}`, // Authorization 헤더 설정
      },
    });
    req.session.githubUser = {
      githubId: userInfo.data.login,
    };

    console.log(userInfo.data);
    currentGithubUser = req.session.githubUser.githubId;
  } catch (err) {
    console.log(err);
  }
  console.log(req.session.id);
  res.cookie('_uid', req.session.id, { signed: true, maxAge: 86400000 });
  // const repositoryList = await axios({
  //   method: 'get',
  //   url: `https://api.github.com/repos/${currentGithubUser}/api-server-final-node-js`,
  //   headers: {
  //     Authorization: `token ${accessToken}`,
  //   },
  // });
  // console.log(repositoryList.data.name);
  if (currentGithubUser) {
    //res.redirect(307, 'http://localhost:3000/portfolio');
    res.json({ accessToken: accessToken });
    console.log(`Login Success!! Current User : ${currentGithubUser}`);
  } else {
    res.json({ errorMessage: 'Login Error' });
    console.log(`Login Failed`);
  }
};

exports.githubLoginAuthRedirect = async function (req, res) {
  const github = {
    clientId: process.env.CLIENT_ID,
    callbackURL: process.env.REDIRECT_ID,
    scope: 'repo,user,gist',
  };
  const url = `https://github.com/login/oauth/authorize?client_id=${github.clientId}&redirect_uri=${github.callbackURL}&scope=${github.scope}`;
  res.redirect(url);
};

exports.getGithubAccessToken = async function (req, res) {
  const github = {
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    code: req.query.code,
  };
  const { data } = await axios({
    method: 'post',
    url: `https://github.com/login/oauth/access_token?client_id=${github.clientId}&client_secret=${github.clientSecret}&code=${github.code}`,
    headers: {
      accept: 'application/json',
    },
  });
  const accessToken = data.access_token;
  res.send(accessToken);
};
