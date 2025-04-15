const prisma = require('../lib/prisma');
const { processContent } = require('../services/aiService');
const { validateUrl } = require('../middleware/validation');

const processUrl = async (req, res) => {
  try {
    const { url, platform = 'twitter' } = req.body;
    const userId = req.user.id; // Get userId from authenticated user

    // Validate URL
    if (!validateUrl(url)) {
      return res.status(400).json({ error: 'Invalid URL format' });
    }

    // Mock content for testing - replace with actual content extraction
    const mockContent = "This is a sample blog post content that will be processed by AI to generate social media posts.";

    // Process content using AI
    const aiResult = await processContent(mockContent, platform);

    // Save processed post to database
    const processedPost = await prisma.processedPost.create({
      data: {
        url: url,
        content: aiResult.content,
        userId: userId,
        socialPosts: {
          create: {
            platform: platform,
            content: aiResult.content,
            status: 'DRAFT'
          }
        }
      },
      include: {
        socialPosts: true
      }
    });

    res.json({
      success: true,
      message: 'Content processed successfully',
      data: processedPost
    });
  } catch (error) {
    console.error('Error processing URL:', error);
    res.status(500).json({ 
      error: 'Failed to process URL',
      details: error.message,
      stack: error.stack
    });
  }
};

const getProcessedPosts = async (req, res) => {
  try {
    const userId = req.user.id;
    const posts = await prisma.processedPost.findMany({
      where: { userId },
      include: { socialPosts: true }
    });
    res.json(posts);
  } catch (error) {
    console.error('Error fetching processed posts:', error);
    res.status(500).json({ error: 'Failed to fetch processed posts' });
  }
};

module.exports = {
  processUrl,
  getProcessedPosts
}; 