const express = require('express');
const router = express.Router();

const userController = require('./user.controller');

router.get('/login', userController.output.login);

module.exports = router;
