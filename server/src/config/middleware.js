const baseResponseStatus = require('./baseResponseStatus');
const axios = require('axios');

const loginMiddleWare = async function (req, res, next) {
  if (req.session.user) {
    next();
  } else {
    res.send(baseResponseStatus.LOGIN_ERROR);
  }
};

const authentication = async (req, res, next) => {
  const { authorization: token } = req.headers;
  const secret = process.env.SESSION_SECRET;
  next();
};

module.exports = {
  loginMiddleWare,
  authentication,
};
