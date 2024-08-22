const express = require('express');
const router = express.Router();
const { registerUser } = require('../controll/register');
const { loginUser } = require('../controll/login');

router.route('/register').post(registerUser);
router.route('/login').get(loginUser);

module.exports = router;