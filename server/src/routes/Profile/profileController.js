const ProfileService = require('./profileService');
const baseResponse = require('../../config/baseResponseStatus');
const regexEmail = require('regex-email');
const { response } = require('../../config/baseResponseStatus');
require('dotenv').config();

const output = {
  userProfile: async (req, res) => {
    const userId = parseInt(req.params.userId);
    const userProfileInfo = await ProfileService.getUserProfile(userId);

    res.json(userProfileInfo);
  },
  userEditProfile: async (req, res) => {
    if (req.session.user) {
      const userId = req.params.userId;
      const userProfileInfo = await ProfileService.userProfileUpdate(userId);
      res.json(userProfileInfo);
    } else {
      res.send(baseResponse.SERVER_CONNECT_ERROR);
    }
  },
};

const process = {
  githubUserProjects: async (req, res) => {
    const userId = req.params.userId;
    if (req.session.user) {
      const checkProjects = await ProfileService.getUserProject(userId);
      res.json(checkProjects);
    } else {
      res.send(baseResponse.LOGIN_ERROR);
    }
  },
  updateUserProfile: async (req, res) => {
    const { name, content, phoneNumber, email, location } = req.body;
    if (req.session.user) {
      const signUpResponse = await ProfileService.changeUserProfile(name, content, phoneNumber, email, location, name);
      return res.send(signUpResponse);
    } else {
      res.send(baseResponse.UPDATE_ERROR_TYPE);
    }
  },
  editExperience: async (req, res) => {
    const { content } = req.body;
    const userId = req.params.userId;
    const editExperienceResult = await ProfileService.editExperienceContent(userId, content);
    return res.send(editExperienceResult);
  },
  editTechStack: async (req, res) => {
    const userId = req.params.userId;
    const { advanced, experienced } = req.body;
    const editExperiencedTechStackResult = await ProfileService.editExperiencedTechStackContent(userId, advanced, experienced);
    return res.send(editExperiencedTechStackResult);
  },
  addEducation: async (req, res) => {
    const { name, department, type, start, end } = req.body;
    const userId = req.params.userId;
    const addEducationREsult = await ProfileService.addEducationContent(userId, name, department, type, start, end);
    return res.send(addEducationREsult);
  },
  editEducation: async (req, res) => {
    const { instituteId, start, end, isDeleted } = req.body;
    const userId = req.params.userId;
    const editEducationResult = await ProfileService.editEducationContent(userId, instituteId, start, end, isDeleted);
    return res.send(editEducationResult);
  },
  editInterest: async (req, res) => {
    const { deleteInterest, insertInterest } = req.body;
    const userId = req.params.userId;
    const editInterestResult = await ProfileService.editInterestContent(userId, deleteInterest, insertInterest);
    return res.send(editInterestResult);
  },
};

module.exports = {
  output,
  process,
};
