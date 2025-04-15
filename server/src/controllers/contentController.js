const prisma = require('../lib/prisma');
const { processContent, limiter } = require('../services/aiService');

const processUrl = async (req, res) => {
  try {
    const { url, userId, platform = 'twitter' } = req.body;

    // Validate URL
    if (!url || !isValidUrl(url)) {
      return res.status(400).json({ error: 'Invalid URL provided' });
    }

    // Validate userId
    if (!userId) {
      return res.status(400).json({ error: 'userId is required' });
    }

    // Check if user exists, if not create one
    let user = await prisma.user.findUnique({
      where: { id: userId }
    });

    if (!user) {
      user = await prisma.user.create({
        data: {
          id: userId,
          email: `${userId}@example.com`,
          authProvider: 'test'
        }
      });
    }

    // TODO: Implement actual content fetching from URL
    // For now, we'll use a mock content
    const mockContent = `This is a sample blog post about ${url}. It contains important information that needs to be converted into a social media post.`;

    // Process content using AI
    const aiResult = await processContent(mockContent, platform);

    // Save processed post to database
    const processedPost = await prisma.processedPost.create({
      data: {
        originalUrl: url,
        summary: aiResult.content,
        userId: userId,
        socialPosts: {
          create: {
            platform: platform,
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
      data: {
        processedPost,
        aiResult
      }
    });
  } catch (error) {
    console.error('Error processing URL:', error);
    res.status(500).json({
      error: 'Failed to process URL',
      details: error.message,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
};

// Helper function to validate URL
function isValidUrl(string) {
  try {
    new URL(string);
    return true;
  } catch (err) {
    return false;
  }
}

module.exports = {
  processUrl,
  limiter
}; 