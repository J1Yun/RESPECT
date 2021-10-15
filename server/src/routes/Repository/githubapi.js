const { appendFile } = require('fs');
const GitHub = require('github-api'); // npm install github-api
const noAuth = new GitHub(); // noAuth 방식 -> token, noAuth,

// 사용자 레포지토리 리스트 조회
exports.getUserRepositoryList = function (req, res) {
  var repositoryList = noAuth.getUser(`${req.params.userId}`);

  repositoryList.listRepos(function (err, repos) {
    repos.forEach((repo) => {
      console.log(`"${repo.full_name} " : "${repo.owner.login}"`);
    });
    res.json(repos);
  });
};
