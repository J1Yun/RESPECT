const jwt = require('jsonwebtoken');
const { response } = require('./baseResponseStatus');
const baseResponse = require('./baseResponseStatus');
require('dotenv').config();
const jwtMiddleware = (req, res, next) => {
  // read the token from header or url
  const token = req.headers['x-access-token'] || req.query.token;
  // token does not exist
  if (!token) {
    return res.send(errResponse(baseResponse.TOKEN_EMPTY));
  }

  // create a promise that decodes the token
  const p = new Promise((resolve, reject) => {
    jwt.verify(token, process.env.JWT_SECRET, (err, verifiedToken) => {
      if (err) reject(err);
      resolve(verifiedToken);
    });
  });

  // if it has failed to verify, it will return an error message
  const onError = error => {
    return res.send(errResponse(baseResponse.TOKEN_VERIFICATION_FAILURE));
  };
  // process the promise
  p.then(verifiedToken => {
    //비밀 번호 바뀌었을 때 검증 부분 추가 할 곳
    req.verifiedToken = verifiedToken;
    next();
  }).catch(onError);
};

const loginMiddleWare = async (req, res, next) => {
  if (req.session.user) {
    next();
  } else {
    res.send(baseResponse.LOGIN_ERROR);
  }
};

const authentication = async (req, res, next) => {
  const { authorization: token } = req.headers;
  const secret = process.env.SESSION_SECRET;
  next();
};

const isAuthenticated = async (req, res, next) => {
  //session에 user 정보가 있는지 확인하는 MiddleWare
  if (req.isAuthenticated()) {
    next();
  } else {
    res.redirect('/login');
  }
};

module.exports = {
  jwtMiddleware,
  loginMiddleWare,
  authentication,
  isAuthenticated,
};
