const router = require('express').Router();
const Joi = require('joi');
const authController = require('../controllers/auth_controller');

router.post('/auth', authController.Login);

module.exports = router;