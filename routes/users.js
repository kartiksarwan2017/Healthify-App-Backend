const router = require('express').Router();
const usersController = require('../controllers/users_controller');

router.post('/users', usersController.Register);

module.exports = router;