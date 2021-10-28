const baseResponseStatus = require('./baseResponseStatus');
const axios = require('axios');

const loginMiddleWare = async function (req, res, next) {
  if (req.session.user) {
    next();
  } else {
    res.send(baseResponseStatus.LOGIN_ERROR);
  }
};

module.exports = {
  loginMiddleWare,
};
