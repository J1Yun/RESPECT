const express = require('express');
const logger = require('morgan');
const methodOverride = require('method-override');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const home = require('./src/routes/index');
const repository = require('./src/routes/index');
const passport = require('passport');
const cors = require('cors');
const { MemoryStore } = require('express-session');
const corsOption = { origin: 'http://localhost:3000', credential: true };

class App {
  constructor() {
    this.app = express();

    dotenv.config();

    // 미들웨어 셋팅
    this.setMiddleWare();

    // 정적 디렉토리
    this.setStatic();

    // 라우트 셋팅
    this.getRouting();
  }

  setMiddleWare() {
    // 미들웨어 셋팅
    this.app.use(logger('dev'));

    // body parser
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));

    // method-override
    this.app.use(methodOverride());

    // express session
    this.app.use(cookieParser(process.env.SESSION_SECRET));
    this.app.use(
      expressSession({
        secret: process.env.SESSION_SECRET,
        resave: true,
        saveUninitialized: true,
        store: new MemoryStore({
          checkPeriod: 86400000, // 24 hours
        }),
        cookie: { signed: true, maxAge: 86400000 },
      }),
    );

    this.app.use(function (req, res, next) {
      if (req.session.user) res.locals.user = req.session.user;
      else res.locals.user = undefined;
      next();
    });

    this.app.use(function (req, res, next) {
      if (req.session.githubUser) res.locals.githubUser = req.session.githubUser;
      else res.locals.githubUser = undefined;
      next();
    });
    this.app.use(cors(corsOption));
    require('passport');
    this.app.use(passport.initialize()); //user 정보가 req.user로 들어가게 된다.
    this.app.use(passport.session()); //passport 내에서 session을 사용해 로그인을 지속시킨다.
  }

  setStatic() {
    this.app.use('/uploads', express.static('uploads'));
  }

  getRouting() {
    this.app.use(home);
  }
}
module.exports = new App().app;
