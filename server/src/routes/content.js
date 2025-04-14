const express = require('express');
const router = express.Router();
const contentController = require('../controllers/contentController');

// Process URL endpoint
router.post('/process', contentController.processUrl);

module.exports = router; 