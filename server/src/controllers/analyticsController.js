const prisma = require('../lib/prisma');

const getAnalytics = async (req, res) => {
  try {
    // Get total number of processed posts
    const totalPosts = await prisma.processedPost.count();

    // Get posts by platform
    const postsByPlatform = await prisma.socialPost.groupBy({
      by: ['platform'],
      _count: {
        platform: true
      }
    });

    // Get posts by status
    const postsByStatus = await prisma.socialPost.groupBy({
      by: ['status'],
      _count: {
        status: true
      }
    });

    // Get recent activity
    const recentActivity = await prisma.processedPost.findMany({
      take: 5,
      orderBy: {
        createdAt: 'desc'
      },
      include: {
        socialPosts: true
      }
    });

    res.json({
      totalPosts,
      postsByPlatform,
      postsByStatus,
      recentActivity
    });
  } catch (error) {
    console.error('Error fetching analytics:', error);
    res.status(500).json({ error: 'Failed to fetch analytics' });
  }
};

module.exports = {
  getAnalytics
}; 