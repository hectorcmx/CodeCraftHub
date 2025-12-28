const express = require('express');
const { register, login } = require('../controllers/userController');
const { validateUser } = require('../validators/userValidator');
const router = express.Router();

router.post('/register', validateUser, register);
router.post('/login', validateUser, login);

module.exports = router;