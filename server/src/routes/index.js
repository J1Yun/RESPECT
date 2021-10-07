const express = require('express');
const router = express.Router();

const userController = require('./user.controller');
const githubapi = require('./githubapi');

router.get('/login', userController.output.login);
router.get('/userRepository/:userId', githubapi.getUserRepositoryList);

module.exports = router;
