const dotenv = require('dotenv');
dotenv.config();
const UserService = require('./userService.js');
const baseResponse = require('../../config/baseResponseStatus');
const regexEmail = require('regex-email');
const { response } = require('../../config/baseResponseStatus');
const session = require('express-session');
const axios = require('axios');

const output = {
  login: (req, res) => {
    console.log('hihi');
    res.send('hi');
  },
  githubRepository: async (req, res) => {
    try {
      const accessToken = req.user[0];
      const currentGithubUser = req.user[1].login;
      const repositoryList = await axios({
        method: 'get',
        url: `https://api.github.com/users/${currentGithubUser}/repos`,
        headers: {
          Authorization: `token ${accessToken}`,
        },
        withCredentials: true,
      });
      let reposList = {};
      for (let data of repositoryList.data) {
        reposList[data.id] = data.name;
      }
      res.send(reposList);
    } catch (err) {
      //console.log(err);
      res.send(baseResponse.SERVER_CONNECT_ERROR);
    }
  },
  githubStack: async (req, res) => {
    try {
      const accessToken = req.session.passport.user[0];
      const currentGithubUser = req.session.passport.user[1].login;
      const repositoryList = await axios({
        method: 'get',
        url: `https://api.github.com/users/${currentGithubUser}/repos`,
        headers: {
          Authorization: `token ${accessToken}`,
        },
        withCredentials: true,
      });
      let techStackList = new Set();
      let arr = [];
      for (let data of repositoryList.data) {
        const stackList = await axios({
          method: 'get',
          url: `https://api.github.com/repos/${currentGithubUser}/${data.name}/languages`,
          headers: {
            Authorization: `token ${accessToken}`,
          },
          withCredentials: true,
        });
        var str = JSON.stringify(stackList.data);
        str = str.match(/\"([\w+]{1,})\"/g);
        if (str) {
          for (let temp of str) {
            techStackList.add(temp.substring(1, temp.length - 1));
          }
        }
      }
      techStackList.forEach(element => {
        arr.push(element);
      });
      arr = JSON.stringify(arr);
      arr = arr.replace(/[\"\[\]]/g, '');
      res.send(arr);
    } catch (err) {
      res.send(baseResponse.SERVER_CONNECT_ERROR);
      console.log(err);
    }
  },
  lookAround: async (req, res) => {
    const userId = req.params.userId;
    const { interestList } = req.body;
    const { filter } = req.query;
    const lookAroundResult = await UserService.getLookAroundByUserId(userId, interestList, filter);
    res.send(lookAroundResult);
  },
};

const process = {
  login: async (req, res) => {
    const { nickname, password } = req.body;
    if (!nickname) return res.send(baseResponse.NICKNAME_EMPTY);
    if (!password) return res.send(baseResponse.PASSWORD_EMPTY);
    if (!regexEmail.test(nickname)) return res.send(baseResponse.EMAIL_ERROR_TYPE);

    const checkUser = await UserService.checkUserAccount(nickname, password);
    if (checkUser.isSuccess) {
      req.session.user = {
        id: checkUser.id,
        nickname: checkUser.nickname,
        username: checkUser.username,
        authorized: true,
      };
    }
    return res.send(checkUser);
  },
  signUp: async (req, res) => {
    const { nickname, password, verifiedPassword, name } = req.body;
    if (!nickname) return res.send(baseResponse.NICKNAME_EMPTY);
    if (!password) return res.send(baseResponse.PASSWORD_EMPTY);
    if (!regexEmail.test(nickname)) return res.send(baseResponse.EMAIL_ERROR_TYPE);
    if (!verifiedPassword) return res.send(baseResponse.SIGNUP_VERIFIEDPASSWORD_EMPTY);
    if (!name) return res.send(baseResponse.SIGNUP_NAME_EMPTY);
    if (password != verifiedPassword) return res.send(baseResponse.PASSWORD_WRONG);

    const signUpResponse = await UserService.createUser(nickname, password, name);

    return res.send(signUpResponse);
  },
  logout: async (req, res) => {
    req.logout();
    res.redirect('/login');
  },
  githubStack: async (req, res) => {
    const userId = req.params.userId;
    const stack = req.body.stack;
    let techStack = [];
    for (let st of stack) {
      techStack.push(st);
    }
    techStack = JSON.stringify(techStack);
    techStack = arr.replace(/[\"\[\]]/g, '');

    const stackResponse = await UserService.createTechStack(userId, techStack);

    return res.send(stackResponse);
  },
};

module.exports = {
  output,
  process,
};
