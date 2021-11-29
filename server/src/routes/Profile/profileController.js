const ProfileService = require('./profileService');
const baseResponse = require('../../config/baseResponseStatus');
const regexEmail = require('regex-email');
const { response } = require('../../config/baseResponseStatus');
require('dotenv').config();
exports.userProfile = async function (req, res) {
  const userId = parseInt(req.params.userId);
  const userProfileInfo = await ProfileService.getUserProfile(userId);
  // const checkInterest = await ProfileService.getUserInterest(userId);
  // const checkTechStack = await ProfileService.getUserTechStack(userId);
  // const checkExperience = await ProfileService.getUserExperience(userId);
  // const checkEducation = await ProfileService.getUserEducation(userId);
  // const checkProjects = await ProfileService.getUserProject(userId); // Project 가져오기 (3개)
  // const checkStudy = await ProfileService.getUserStudy(userId); // Study 가져오기 (3개)

  // const userProfileInfo = {
  //   UserProfile: checkProfile,
  //   UserInterest: checkInterest,
  //   UserTechStack: checkTechStack,
  //   UserExperience: checkExperience,
  //   UserEducation: checkEducation,
  //   UserProjects: checkProjects,
  //   UserStudy: checkStudy,
  // };
  // console.log(userProfileInfo);
  res.json(userProfileInfo);
};

exports.githubUserProjects = async function (req, res) {
  const userId = req.params.userId;
  if (req.session.user) {
    const checkProjects = await ProfileService.getUserProject(userId);
    res.json(checkProjects);
  } else {
    res.send(baseResponse.LOGIN_ERROR);
  }
};

exports.userEditProfile = async function (req, res) {
  if (req.session.user) {
    const userId = req.params.userId;
    const userProfileInfo = await ProfileService.userProfileUpdate(userId);
    res.json(userProfileInfo);
  } else {
    res.send(baseResponse.SERVER_CONNECT_ERROR);
  }
};

exports.updateUserProfile = async function (req, res) {
  const { name, content, phoneNumber, email, location } = req.body;
  if (req.session.user) {
    const signUpResponse = await ProfileService.changeUserProfile(name, content, phoneNumber, email, location, name);
    return res.send(signUpResponse);
  } else {
    res.send(baseResponse.UPDATE_ERROR_TYPE);
  }
};

exports.editExperience = async function (req, res) {
  const { content } = req.body;
  const userId = req.params.userId;
  const editExperienceResult = await ProfileService.editExperienceContent(userId, content);
  return res.send(editExperienceResult);
};

exports.editTechStack = async function (req, res) {
  const userId = req.params.userId;
  const { advanced, experienced } = req.body;

  const editExperiencedTechStackResult = await ProfileService.editExperiencedTechStackContent(userId, experienced);
  return res.send(editExperiencedTechStackResult);

  // if (advanced && experienced[0] == undefined) {
  //   const editAdvancedTechStackResult = await ProfileService.editAdvancedTechStackContent(userId, advanced);
  //   return res.send(editAdvancedTechStackResult);
  // } else if (experienced && advanced[0] == undefined) {
  //   const editExperiencedTechStackResult = await ProfileService.editExperiencedTechStackContent(userId, experienced);
  //   return res.send(editExperiencedTechStackResult);
  // } else if (advanced[0] == undefined && experienced == undefined) {
  //   return res.send(baseResponse.SUCCESS);
  // } else {
  //   const editAdvancedTechStackResult = await ProfileService.editAdvancedTechStackContent(userId, advanced);
  //   const editExperiencedTechStackResult = await ProfileService.editExperiencedTechStackContent(userId, experienced);
  //   if (editAdvancedTechStackResult && editExperiencedTechStackResult) {
  //     return res.send(baseResponse.SUCCESS);
  //   } else {
  //     return res.json({ Error: 'ERROR' });
  //   }
  // }
};

exports.addEducation = async function (req, res) {
  const { name, department, type, start, end } = req.body;
  const userId = req.params.userId;
  const addEducationREsult = await ProfileService.addEducationContent(userId, name, department, type, start, end);
  return res.send(addEducationREsult);
};
exports.editEducation = async function (req, res) {
  const { instituteId, start, end, isDeleted } = req.body;
  const userId = req.params.userId;
  const editEducationResult = await ProfileService.editEducationContent(userId, instituteId, start, end, isDeleted);
  return res.send(editEducationResult);
};

exports.editInterest = async function (req, res) {
  const { deleteInterest, insertInterest } = req.body;
  const userId = req.params.userId;
  const editInterestResult = await ProfileService.editInterestContent(userId, deleteInterest, insertInterest);
  return res.send(editInterestResult);
};
