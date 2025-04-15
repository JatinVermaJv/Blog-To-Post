const { VALIDATION_RULES } = require('../config/security');

const validateInput = (schema) => {
  return (req, res, next) => {
    try {
      const { error } = schema.validate(req.body);
      if (error) {
        return res.status(400).json({ error: error.details[0].message });
      }
      next();
    } catch (error) {
      return res.status(500).json({ error: 'Validation failed' });
    }
  };
};

const sanitizeInput = (req, res, next) => {
  try {
    // Sanitize request body
    if (req.body) {
      Object.keys(req.body).forEach(key => {
        if (typeof req.body[key] === 'string') {
          // Remove potentially harmful characters
          req.body[key] = req.body[key]
            .replace(/<[^>]*>/g, '') // Remove HTML tags
            .replace(/[<>]/g, '') // Remove angle brackets
            .trim(); // Remove whitespace
        }
      });
    }

    // Sanitize query parameters
    if (req.query) {
      Object.keys(req.query).forEach(key => {
        if (typeof req.query[key] === 'string') {
          req.query[key] = req.query[key]
            .replace(/<[^>]*>/g, '')
            .replace(/[<>]/g, '')
            .trim();
        }
      });
    }

    next();
  } catch (error) {
    return res.status(500).json({ error: 'Input sanitization failed' });
  }
};

const validateEmail = (email) => {
  return VALIDATION_RULES.email.pattern.test(email);
};

const validatePassword = (password) => {
  const rules = VALIDATION_RULES.password;
  return (
    password.length >= rules.minLength &&
    /[A-Z]/.test(password) &&
    /[a-z]/.test(password) &&
    /[0-9]/.test(password) &&
    /[^A-Za-z0-9]/.test(password)
  );
};

const validateUrl = (url) => {
  return VALIDATION_RULES.url.pattern.test(url);
};

module.exports = {
  validateInput,
  sanitizeInput,
  validateEmail,
  validatePassword,
  validateUrl
}; 