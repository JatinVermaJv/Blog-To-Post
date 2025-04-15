const rateLimit = require('express-rate-limit');
const cors = require('cors');

// JWT Configuration
const JWT_CONFIG = {
  secret: process.env.JWT_SECRET || 'your-secret-key',
  expiresIn: '24h',
  issuer: 'blog-to-social-api',
  audience: 'blog-to-social-client'
};

// CORS Configuration
const CORS_OPTIONS = {
  origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  maxAge: 86400 // 24 hours
};

// Rate Limiting Configuration
const RATE_LIMIT_CONFIG = {
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later.',
  standardHeaders: true,
  legacyHeaders: false
};

// Create rate limiters
const globalLimiter = rateLimit(RATE_LIMIT_CONFIG);
const authLimiter = rateLimit({
  ...RATE_LIMIT_CONFIG,
  max: 5 // stricter limit for auth endpoints
});

// Input Validation Rules
const VALIDATION_RULES = {
  email: {
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: 'Invalid email format'
  },
  password: {
    minLength: 8,
    requireUppercase: true,
    requireLowercase: true,
    requireNumbers: true,
    requireSpecialChars: true
  },
  url: {
    pattern: /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/,
    message: 'Invalid URL format'
  }
};

module.exports = {
  JWT_CONFIG,
  CORS_OPTIONS,
  RATE_LIMIT_CONFIG,
  globalLimiter,
  authLimiter,
  VALIDATION_RULES
}; 