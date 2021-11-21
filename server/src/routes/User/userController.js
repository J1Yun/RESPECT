const dotenv = require('dotenv');
dotenv.config();
const UserService = require('./userService.js');
const baseResponse = require('../../config/baseResponseStatus');
const regexEmail = require('regex-email');
const { response } = require('../../config/baseResponseStatus');
const session = require('express-session');

const output = {
  login: (req, res) => {
    console.log('hihi');
    res.send('hi');
  },
  githubCallback: (req, res) => {
    console.log('User 정보:', req.user);
    console.log(req.isAuthenticated()); //session에 정보가 저장되어 있는지 확인
    if (req.user) res.redirect('/');
    //github ID가 DB에 존재하면 메인화면으로 redirect
    else res.redirect('/signUp');
    //github ID가 DB에 존재하지 않으면 회원가입 화면으로 redirect
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
  githubCallbackFunction: async (req, res) => {
    console.log('hi', accessToken, refreshToken, profile, cb);
  },
};

module.exports = {
  output,
  process,
};
