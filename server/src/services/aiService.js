const { genAI, PROMPT_TEMPLATES } = require('../config/ai');
const rateLimit = require('express-rate-limit');

// Create rate limiter
const limiter = rateLimit({
  windowMs: 5000,
  max: 1,
  message: 'Too many requests, please try again later.',
});

const processContent = async (content, platform) => {
  try {
    // Get the appropriate prompt template
    const template = PROMPT_TEMPLATES[platform];
    if (!template) {
      throw new Error(`Unsupported platform: ${platform}`);
    }

    // Get the Gemini model
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    // Format the prompt
    const prompt = template.template.replace('{content}', content);

    // Generate content
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const generatedText = response.text();

    // Truncate if necessary
    const truncatedText = generatedText.slice(0, template.maxLength);

    return {
      success: true,
      content: truncatedText,
      originalLength: generatedText.length,
      truncatedLength: truncatedText.length,
    };
  } catch (error) {
    console.error('Error in AI processing:', error);
    throw new Error(`Failed to process content: ${error.message}`);
  }
};

const generateMultiplePlatformContent = async (content, platforms) => {
  const results = {};

  for (const platform of platforms) {
    try {
      results[platform] = await processContent(content, platform);
    } catch (error) {
      results[platform] = {
        success: false,
        error: error.message,
      };
    }
  }

  return results;
};

module.exports = {
  processContent,
  generateMultiplePlatformContent,
  limiter,
}; 