const express = require('express');
const router = express.Router();

const userController = require('./User/userController');
const profileController = require('./Profile/profileController');
const projectController = require('./Project/projectController');

const githubapi = require('./Repository/githubApi');
const db = require('./Repository/dbConnection');
const middleWare = require('../config/middleware');

// Login , SignUp
router.get('/login', userController.output.login);
router.post('/login', userController.process.login);
router.post('/signUp', userController.process.signUp);

// Profile
router.get('/profile/:userId', middleWare.loginMiddleWare, profileController.userProfile);
router.get('/profile/interest/:userId', profileController.userInterest);
router.get('/profile/teckstack/:userId', profileController.userTeckStack);
router.get('/profile/experience/:userId', profileController.userExperience);
router.get('/profile/education/:userId', profileController.userEducation);
router.get('/profile/projects/:userId', profileController.userProjects);
router.get('/profile/study/:userId', profileController.userStudy);

router.get('/profile/update/:userId', profileController.userEditProfile);
router.post('/profile/update', profileController.updateUserProfile);

// Project
router.get('/project/:userId', projectController.projectList);
//router.get('/project/:userId/:projectName, projectController);

router.get('/userRepository/:userId', githubapi.getUserRepositoryList);
router.get('/userIdList', db.retrieveUserIdList);

module.exports = router;
