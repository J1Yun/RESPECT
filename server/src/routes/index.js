const express = require('express');
const router = express.Router();

const userController = require('./User/userController');
const githubapi = require('./Repository/githubApi');
const db = require('./Repository/dbConnection');

router.get('/login', userController.output.login);
router.post('/login', userController.process.login);
router.post('/signUp', userController.process.signUp);
router.get('/userRepository/:userId', githubapi.getUserRepositoryList);
router.get('/userIdList', db.retrieveUserIdList);

module.exports = router;
