const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Create user endpoint
router.post('/', userController.createUser);

module.exports = router; 