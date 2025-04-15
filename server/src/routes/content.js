const express = require('express');
const router = express.Router();
const { authenticateToken } = require('../middleware/auth');
const { globalLimiter } = require('../config/security');
const contentController = require('../controllers/contentController');

// Apply rate limiting to all content routes
router.use(globalLimiter);

// Apply authentication to all content routes
router.use(authenticateToken);

// Content processing routes
router.post('/process', contentController.processUrl);
router.get('/posts', contentController.getProcessedPosts);

module.exports = router; 