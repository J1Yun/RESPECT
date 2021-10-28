const axios = require('axios');
exports.githubLogin = async function (req, res) {
  //'/callback': 인증 정보를 바탕으로 access token을 받아올 수 있도록 도와주는 라우터이다.

  const github = {
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
  };

  const code = req.query.code; //이 req.query.code가 위의 'code=[Authorization Code]' 에 해당한다.
  console.log(code);
  const { data } = await axios({
    method: 'post',
    url: `https://github.com/login/oauth/access_token?client_id=${github.clientId}&client_secret=${github.clientSecret}&code=${code}`,
    headers: {
      accept: 'application/json',
    },
  });
  const accessToken = data.access_token;
  console.log(accessToken);
  const repos = await axios({
    method: 'get',
    url: `https://api.github.com/user`,
    headers: {
      Authorization: `token ${accessToken}`, // Authorization 헤더 설정
    },
  });
  //console.log(repos.data.login);
  const currentUser = repos.data.login;
  const currentUserRepository = await axios({
    method: 'get',
    url: `https://api.github.com/repos/${currentUser}/nodejs`,
    headers: {
      Authorization: `token ${accessToken}`,
    },
  });
  console.log(currentUserRepository.data.owner.login);
  res.redirect('http://localhost:3000'); // home redirect
};
