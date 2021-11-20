const passport = require('passport');
const userDao = require('../routes/User/userDao');
const { pool } = require('../config/database');
const dotenv = require('dotenv');
dotenv.config();
const { Strategy: GithubStrategy } = require('passport-github');

require('dotenv').config();

const githubConfig = {
  clientID: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  callbackURL: process.env.CLIENT_CALLBACK_URL,
};

const githubLoginVerify = async (accessToken, refreshToken, profile, cb) => {
  const connection = await pool.getConnection(async conn => conn);
  try {
    console.log(profile._json);
    const { login: githubID } = profile._json;
    const user = await userDao.getUserIdByNickname(connection, githubID); //로그인한 github ID가 DB ID에 존재하는지 확인
    return cb(null, user);
  } catch (err) {
    return cb(err);
  } finally {
    connection.release();
  }
};

passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser((user, done) => {
  done(null, user);
});

module.exports = () => {
  passport.use('github', new GithubStrategy(githubConfig, githubLoginVerify));
};
