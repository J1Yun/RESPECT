const UserService = require('./userService.js');
const baseResponse = require('../../config/baseResponseStatus');
const regexEmail = require('regex-email');
const { response } = require('../../config/baseResponseStatus');

const output = {
  login: (req, res) => {
    console.log('hihi');
    res.send({ text: 'login' });
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
      console.log(req.session.user);
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
};

module.exports = {
  output,
  process,
};
