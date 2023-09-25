const express = require('express');
const router = express.Router();

const { createUser, login } = require('../controllers/usersControllers');

router.post('/register', createUser);
router.post('/login', login);

module.exports = router;