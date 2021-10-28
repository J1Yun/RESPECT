const axios = require('axios');

exports.githubLogin = async function (req, res) {
  //'/callback': 인증 정보를 바탕으로 access token을 받아올 수 있도록 도와주는 라우터이다.
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
  const githubUser = req.session.githubUser.githubId;
  if (githubUser) {
    res.redirect('http://localhost:3000');
    console.log(`Current User : ${githubUser}`);
  } else {
    res.redirect('http://localhost:3000/githubLogin');
    console.log(`Login Failed`);
  }
};
