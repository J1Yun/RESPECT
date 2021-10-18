const ProfileService = require('./profileService');
const baseResponse = require('../../config/baseResponseStatus');
const { response } = require('../../config/baseResponseStatus');

exports.userProfile = async function (req, res) {
  const userId = req.params.userId;
  // 로그인이 되있을 경우
  if (req.session.user) {
    const checkProfile = await ProfileService.getUserProfile(userId);
    console.log(checkProfile);
    res.json(checkProfile);
  } else {
    res.send(baseResponse.LOGIN_ERROR);
  }
};

exports.userInterest = async function (req, res) {
  const userId = req.params.userId;
  if (req.session.user) {
    const checkInterest = await ProfileService.getUserInterest(userId);
    console.log(checkInterest);
    res.json(checkInterest);
  } else {
    res.send(baseResponse.LOGIN_ERROR);
  }
};

exports.userTeckStack = async function (req, res) {
  const userId = req.params.userId;
  if (req.session.user) {
    const checkTeckStack = await ProfileService.getUserTeckStack(userId);
    res.json(checkTeckStack);
  } else {
    res.send(baseResponse.LOGIN_ERROR);
  }
};

exports.userExperience = async function (req, res) {
  const userId = req.params.userId;
  if (req.session.user) {
    const checkExperience = await ProfileService.getUserExperience(userId);
    res.json(checkExperience);
  } else {
    res.send(baseResponse.LOGIN_ERROR);
  }
};

exports.userEducation = async function (req, res) {
  const userId = req.params.userId;
  if (req.session.user) {
    const ckeckEducation = await ProfileService.getUserEducation(userId);
    res.json(ckeckEducation);
  } else {
    res.send(baseResponse.LOGIN_ERROR);
  }
};

exports.userProjects = async function (req, res) {
  const userId = req.params.userId;
  if (req.session.user) {
    const checkProjects = await ProfileService.getUserProject(userId);
    res.json(checkProjects);
  } else {
    res.send(baseResponse.LOGIN_ERROR);
  }
};
exports.userStudy = async function (req, res) {
  const userId = req.params.userId;
  if (req.session.user) {
    const checkStudy = await ProfileService.getUserStudy(userId);
    res.json(checkStudy);
  } else {
    res.send(baseResponse.LOGIN_ERROR);
  }
};
