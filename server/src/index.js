const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const { CORS_OPTIONS, globalLimiter, authLimiter } = require('./config/security');
const { sanitizeInput } = require('./middleware/validation');

const contentRoutes = require('./routes/content');
const postRoutes = require('./routes/posts');
const analyticsRoutes = require('./routes/analytics');
const userRoutes = require('./routes/users');
const healthRoutes = require('./routes/health');
const authRoutes = require('./routes/auth');

const app = express();

// Security Middleware
app.use(helmet()); // Adds various HTTP headers for security
app.use(cors(CORS_OPTIONS)); // CORS configuration
app.use(express.json({ limit: '10kb' })); // Limit JSON body size
app.use(sanitizeInput); // Sanitize all inputs

// Rate Limiting
app.use(globalLimiter); // Global rate limiting
app.use('/api/auth', authLimiter); // Stricter rate limiting for auth endpoints

// Routes
app.use('/api/content', contentRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/analytics', analyticsRoutes);
app.use('/api/users', userRoutes);
app.use('/api/health', healthRoutes);
app.use('/api/auth', authRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  
  // Handle specific error types
  if (err.name === 'ValidationError') {
    return res.status(400).json({ error: err.message });
  }
  
  if (err.name === 'UnauthorizedError') {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  
  // Default error
  res.status(500).json({ error: 'Something went wrong!' });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 