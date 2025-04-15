const express = require('express');
const router = express.Router();
const contentController = require('../controllers/contentController');

// Apply rate limiting to the process endpoint
router.post('/process', contentController.limiter, contentController.processUrl);

module.exports = router; 