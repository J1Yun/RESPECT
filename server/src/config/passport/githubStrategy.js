const passport = require('passport');
const githubStrategy = require('passport-github').Strategy;

const userDao = require('../../routes/User/userDao');

module.exports = () => {
  passport.use(
    new githubStrategy(
      {
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        callbackURL: process.env.CLIENT_CALLBACK_URL,
      },
      async (accessToken, refreshToken, profile, cb) => {
        try {
          const { name, login: githubID, html_url: githubURL } = profile._json;
          let user = await userDao.getUserIdByNickname(githubID);
          if (!user) {
            user = await userDao.createUserAccount(githubID, name);
          }
          return cb(null, user);
        } catch (err) {
          return cb(err);
        }
      },
    ),
  );
  passport.serializeUser((user, done) => {
    done(null, user);
  });
  passport.deserializeUser((user, done) => {
    done(null, user);
  });
};
