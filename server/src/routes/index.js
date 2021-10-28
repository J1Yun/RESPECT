const express = require('express');
const router = express.Router();

const userController = require('./User/userController');
const profileController = require('./Profile/profileController');
const projectController = require('./Project/projectController');

const githubapi = require('./Repository/githubApi');
const db = require('./Repository/dbConnection');
const middleWare = require('../config/middleware');
const commentController = require('./Comment/commentController');
const githubAccess = require('./Github/githubLogin');
// Login , SignUp
router.get('/login', userController.output.login);
router.post('/login', userController.process.login);
router.post('/signUp', userController.process.signUp);

// Github Login
router.get('/auth', githubAccess.githubLogin);

// Profile
// profile 정보 가져오기
router.get('/profile/:userId', middleWare.loginMiddleWare, profileController.userProfile);

// Interest 가져오기
router.get('/profile/interest/:userId', profileController.userInterest);

// TeckStack 가져오기
router.get('/profile/teckstack/:userId', profileController.userTeckStack);

// Experience 가져오기
router.get('/profile/experience/:userId', profileController.userExperience);

// Education 가져왹
router.get('/profile/education/:userId', profileController.userEducation);

// 프로젝트 가져오기 (3개, Pinned)
router.get('/profile/projects/:userId', profileController.userProjects);

// Study 가져오기 (3개)
router.get('/profile/study/:userId', profileController.userStudy);

// Profile Update
router.get('/profile/update/:userId', profileController.userEditProfile);
router.post('/profile/update', profileController.updateUserProfile);

// Project
router.get('/project/:userId', projectController.projectList);
//router.get('/project/:userId/:projectId, projectController);

// Comment
router.get('/comment/:projectId', commentController.projectComment);
router.put('/comment/:projectId', middleWare.loginMiddleWare, commentController.addComment);

router.get('/userRepository/:userId', githubapi.getUserRepositoryList);
router.get('/userIdList', db.retrieveUserIdList);

module.exports = router;
