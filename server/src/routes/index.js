const express = require('express');
const router = express.Router();

const userController = require('./User/userController');
const profileController = require('./Profile/profileController');
const projectController = require('./Project/projectController');
const commentController = require('./Comment/commentController');
const githubLoginController = require('./Github/githubLoginController');
const poolController = require('./Pool/poolController');
const githubapi = require('./Repository/githubApi');
const db = require('./Repository/dbConnection');
const middleWare = require('../config/middleware');
const passport = require('passport');
// Login , SignUp
router.get('/login', userController.output.login);
router.post('/login', userController.process.login);
router.post('/signUp', userController.process.signUp);
router.post('/logout', middleWare.loginMiddleWare, userController.process.logout);

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

// profile 정보 가져오기
router.get('/profile/:userId', middleWare.loginMiddleWare, profileController.userProfile);

// TechStack 수정
router.put('/profile/techstack/:userId', middleWare.loginMiddleWare, profileController.editTechStack);

// Experience 수정
router.post('/profile/experience/:userId', middleWare.loginMiddleWare, profileController.editExperience);
router.post('/profile/projects/:userId', middleWare.loginMiddleWare, profileController.githubUserProjects);

// Education 수정
router.post('/profile/education/:userId', middleWare.loginMiddleWare, profileController.addEducation);
router.put('/profile/education/:userId', middleWare.loginMiddleWare, profileController.editEducation);

// Interest 수정
router.post('/profile/interest/:userId', middleWare.loginMiddleWare, profileController.editInterest);

// Profile Update
router.get('/profile/update/:userId', middleWare.loginMiddleWare, profileController.userEditProfile);
router.put('/profile/update', middleWare.loginMiddleWare, profileController.updateUserProfile);
router.post('/profile/projects/:userId', middleWare.loginMiddleWare, profileController.githubUserProjects);

// Project
router.get('/:userId/project', projectController.projectList);

// 프로젝트 상세 보기
router.get('/:userId/project/:projectId', projectController.getProjectByUserProjectId);

// Comment
router.get('/comment/:projectId', commentController.projectComment);
router.post('/comment/:projectId', middleWare.loginMiddleWare, commentController.addComment);

router.get('/userRepository/:userId', githubapi.getUserRepositoryList);
router.get('/userIdList', db.retrieveUserIdList);

// Look Around
router.get('/:userId/lookAround', userController.output.lookAround);
router.get('/search', userController.output.searchUser);

// Respect
router.post('/profile/:respectUserId/:userId', middleWare.loginMiddleWare, userController.process.respect);
router.get('/profile/:userId/follower', userController.output.respectMe);
router.get('/profile/:userId/following', userController.output.myRespect);

module.exports = router;
