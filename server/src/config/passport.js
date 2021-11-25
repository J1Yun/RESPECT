const passport = require('passport');
const userDao = require('../routes/User/userDao');
const { pool } = require('../config/database');
const dotenv = require('dotenv');
dotenv.config();
const { Strategy: GithubStrategy } = require('passport-github');

const githubLoginConfig = {
  clientID: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  callbackURL: process.env.CLIENT_CALLBACK_URL,
};

const githubLoginVerify = async (accessToken, refreshToken, profile, cb) => {
  const connection = await pool.getConnection(async conn => conn);
  try {
    return cb(null, [accessToken, profile._json]);
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
  passport.use('github', new GithubStrategy(githubLoginConfig, githubLoginVerify));
};
