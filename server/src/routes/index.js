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
router.get('/github', passport.authenticate('github', { scope: 'repo,user,gist' })); //Github Request
router.get(
  '/portfolio',
  passport.authenticate('github', {
    failureRedirect: '/github',
    successRedirect: '/', //Todo(지윤): 깃허브 로그인 성공시 이동할 redirect page
  }),
);

router.get('/github/projectList', middleWare.isAuthenticated, userController.output.githubRepository); //github repository list 가져오기
router.get('/github/stack', middleWare.isAuthenticated, userController.output.githubStack); //github tech stack list 가져오기
router.post('/profile/:userId/github/stack', userController.process.githubStack); //github tech stack list에서 선택 등록하기

// Profile

// profile 정보 가져오기
router.get('/profile/:userId', profileController.userProfile);

router.post('/profile/techstack/:userId', profileController.editTechStack);
router.post('/profile/experience/:userId', profileController.editExperience);
router.post('/profile/projects/:userId', profileController.githubUserProjects);

router.post('/profile/education/:userId', profileController.addEducation);
router.put('/profile/education/:userId', profileController.editEducation);

router.post('/profile/interest/:userId', profileController.editInterest);

// 프로젝트 (3개, Pinned)

router.post('/profile/projects/:userId', profileController.githubUserProjects);

// Profile Update
router.get('/profile/update/:userId', profileController.userEditProfile);
router.put('/profile/update', profileController.updateUserProfile);

// Project
router.get('/project/:userId', projectController.projectList);
router.get('/project/:userId/:projectId', projectController.getProjectByUserProjectId);
//router.get('/project/:userId/:projectId, projectController);

// Comment
router.get('/comment/:projectId', commentController.projectComment);
router.post('/comment/:projectId', middleWare.loginMiddleWare, commentController.addComment);

router.get('/userRepository/:userId', githubapi.getUserRepositoryList);
router.get('/userIdList', db.retrieveUserIdList);

// Look Around
router.get('/lookAround/:userId', userController.output.lookAround);
module.exports = router;
