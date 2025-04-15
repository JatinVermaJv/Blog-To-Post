const prisma = require('../lib/prisma');
const os = require('os');

const getHealthStatus = async (req, res) => {
  try {
    console.log('\n=== Health Check Started ===');

    // Get database statistics
    console.log('🔄 Fetching database statistics...');
    const [
      totalUsers,
      totalProcessedPosts,
      totalSocialPosts,
      postsByPlatform,
      postsByStatus
    ] = await Promise.all([
      prisma.user.count(),
      prisma.processedPost.count(),
      prisma.socialPost.count(),
      prisma.socialPost.groupBy({
        by: ['platform'],
        _count: {
          platform: true
        }
      }),
      prisma.socialPost.groupBy({
        by: ['status'],
        _count: {
          status: true
        }
      })
    ]);
    console.log('✅ Database statistics fetched');

    // Get system metrics
    console.log('🔄 Calculating system metrics...');
    const systemMetrics = {
      uptime: process.uptime(),
      memoryUsage: process.memoryUsage(),
      cpuUsage: os.loadavg(),
      freeMemory: os.freemem(),
      totalMemory: os.totalmem(),
      platform: os.platform(),
      nodeVersion: process.version
    };
    console.log('✅ System metrics calculated');

    // Calculate memory usage percentage
    const memoryUsagePercentage = (systemMetrics.memoryUsage.heapUsed / systemMetrics.totalMemory) * 100;

    // Format the response
    const healthStatus = {
      status: 'healthy',
      timestamp: new Date().toISOString(),
      database: {
        totalUsers,
        totalProcessedPosts,
        totalSocialPosts,
        postsByPlatform,
        postsByStatus
      },
      system: {
        uptime: `${Math.floor(systemMetrics.uptime / 60)} minutes`,
        memory: {
          used: `${(systemMetrics.memoryUsage.heapUsed / 1024 / 1024).toFixed(2)} MB`,
          total: `${(systemMetrics.totalMemory / 1024 / 1024).toFixed(2)} MB`,
          usagePercentage: `${memoryUsagePercentage.toFixed(2)}%`
        },
        cpu: {
          loadAverage: systemMetrics.cpuUsage.map(load => load.toFixed(2))
        },
        platform: systemMetrics.platform,
        nodeVersion: systemMetrics.nodeVersion
      }
    };

    console.log('✅ Health check completed successfully');
    console.log('=== Health Check Completed ===\n');

    res.json(healthStatus);
  } catch (error) {
    console.error('\n❌ Health check failed:', error);
    console.error('Error details:', {
      message: error.message,
      stack: error.stack
    });
    console.log('=== Health Check Failed ===\n');

    res.status(500).json({
      status: 'unhealthy',
      error: 'Health check failed',
      details: error.message,
      timestamp: new Date().toISOString()
    });
  }
};

module.exports = {
  getHealthStatus
}; 