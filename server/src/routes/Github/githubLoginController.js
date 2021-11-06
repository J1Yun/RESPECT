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
    console.log('err');
  }

  //console.log(req.session.id);
  // const repositoryList = await axios({
  //   method: 'get',
  //   url: `https://api.github.com/repos/${currentGithubUser}/api-server-final-node-js`,
  //   headers: {
  //     Authorization: `token ${accessToken}`,
  //   },
  // });
  // console.log(repositoryList.data.name);
  if (currentGithubUser) {
    res.json({ accessToken: accessToken, sessionId: req.session.id });
    console.log(`Login Success!! Current User : ${currentGithubUser}`);
  } else {
    res.json({ errorMessage: 'Login Error' });
    console.log(`Login Failed`);
  }
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
