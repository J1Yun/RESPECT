const express = require('express');
const router = express.Router();

const userController = require('./User/user.controller');
const githubapi = require('./Repository/githubapi');
const db = require('./Repository/dbconnection');

router.get('/login', userController.output.login);

router.get('/userRepository/:userId', githubapi.getUserRepositoryList);
router.get('/userIdList', db.retrieveUserIdList);

module.exports = router;
