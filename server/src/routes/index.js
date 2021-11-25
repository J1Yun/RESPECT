const express = require('express');
const router = express.Router();

const userController = require('./User/userController');
const profileController = require('./Profile/profileController');
const projectController = require('./Project/projectController');
const githubapi = require('./Repository/githubApi');
const db = require('./Repository/dbConnection');
const middleWare = require('../config/middleware');
const commentController = require('./Comment/commentController');
const githubLoginController = require('./Github/githubLoginController');
const passport = require('passport');
// Login , SignUp
router.get('/login', userController.output.login);
router.post('/login', userController.process.login);
router.post('/signUp', userController.process.signUp);
router.post('/logout', middleWare.isAuthenticated, userController.process.logout);

// Github Social Login through passport
router.get('/github', passport.authenticate('github')); //Github Request
router.get(
  '/portfolio',
  passport.authenticate('github', {
    failureRedirect: '/github',
    successRedirect: '/', //Todo(지윤): 깃허브 로그인 성공시 이동할 redirect page
  }),
);
router.get('/github/projectList', middleWare.isAuthenticated, userController.output.githubRepository); //github repository list 가져오기

// Profile
// profile 정보 가져오기
router.get('/profile/:userId', middleWare.loginMiddleWare, profileController.userProfile);

// Interest 가져오기
router.get('/profile/interest/:userId', profileController.userInterest);

// TeckStack 가져오기
router.get('/profile/teckstack/:userId', profileController.userTechStack);
router.put('/profile/techstack/:userId', profileController.editTechStack);

// Experience 가져오기
router.get('/profile/experience/:userId', profileController.userExperience);
router.post('/profile/experience/:userId', profileController.editExperience);

// Education 가져오기
router.get('/profile/education/:userId', profileController.userEducation);

// 프로젝트 가져오기 (3개, Pinned)
router.get('/profile/projects/:userId', profileController.userProjects);
router.post('/profile/projects/:userId', profileController.githubUserProjects);

// Study 가져오기 (3개)
router.get('/profile/study/:userId', profileController.userStudy);

// Profile Update
router.get('/profile/update/:userId', profileController.userEditProfile);
router.put('/profile/update', profileController.updateUserProfile);

// Project
router.get('/:userId/project', projectController.projectList);
router.get('/:userId/project/:projectId', projectController.getProjectByUserProjectId);
//router.get('/project/:userId/:projectId, projectController);

// Comment
router.get('/comment/:projectId', commentController.projectComment);
router.post('/comment/:projectId', middleWare.loginMiddleWare, commentController.addComment);

router.get('/userRepository/:userId', githubapi.getUserRepositoryList);
router.get('/userIdList', db.retrieveUserIdList);

module.exports = router;
