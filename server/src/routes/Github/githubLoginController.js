const axios = require('axios');

exports.githubLogin = async function (req, res) {
  //'/callback': 인증 정보를 바탕으로 access token을 받아올 수 있도록 도와주는 라우터이다.
  const github = {
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    code: req.query.code,
  };
  console.log(github.code);
  try {
    const { data } = await axios({
      method: 'post',
      url: `https://github.com/login/oauth/access_token?client_id=${github.clientId}&client_secret=${github.clientSecret}&code=${github.code}`,
      headers: {
        accept: 'application/json',
      },
    });
    console.log(data.access_token);
    const accessToken = data.access_token;

    console.log('accessToken: ' + accessToken);
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
    const currentGithubUser = req.session.githubUser.githubId;
    // const repositoryList = await axios({
    //   method: 'get',
    //   url: `https://api.github.com/repos/${currentGithubUser}/api-server-final-node-js`,
    //   headers: {
    //     Authorization: `token ${accessToken}`,
    //   },
    // });

    if (currentGithubUser) {
      return res.send(accessToken);
      console.log(`Current User : ${currentGithubUser}`);
    } else {
      return res.send('fail');
      console.log(`Login Failed`);
    }
  } catch (err) {}
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
