const { GoogleGenerativeAI } = require('@google/generative-ai');

// Initialize the Gemini API
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY, {
  apiVersion: 'v1'
});

// Rate limiting configuration
const RATE_LIMIT = {
  windowMs: 5000, // 5 seconds
  max: 1, // 1 request per windowMs
};

// Prompt templates for different platforms
const PROMPT_TEMPLATES = {
  twitter: {
    maxLength: 280,
    template: `Create a concise, engaging tweet from this blog post. Focus on the main points and include relevant hashtags. Keep it under ${280} characters. Blog content: {content}`,
  },
  threads: {
    maxLength: 500,
    template: `Create a thread post from this blog post. Break down the main points into separate tweets. Each tweet should be under ${500} characters. Blog content: {content}`,
  },
  linkedin: {
    maxLength: 3000,
    template: `Create a professional LinkedIn post from this blog post. Focus on insights and professional value. Keep it under ${3000} characters. Blog content: {content}`,
  },
};

module.exports = {
  genAI,
  RATE_LIMIT,
  PROMPT_TEMPLATES,
}; 