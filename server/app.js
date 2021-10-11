const express = require('express');
const logger = require('morgan');
const methodOverride = require('method-override');

const home = require('./src/routes/index');
const repository = require('./src/routes/index');

class App {
  constructor() {
    this.app = express();

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
  }

  setStatic() {
    this.app.use('/uploads', express.static('uploads'));
  }

  getRouting() {
    this.app.use(home);
  }
}
module.exports = new App().app;
