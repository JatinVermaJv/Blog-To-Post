const prisma = require('../lib/prisma');

const createUser = async (req, res) => {
  try {
    const { email, authProvider } = req.body;

    // Validate required fields
    if (!email || !authProvider) {
      return res.status(400).json({ error: 'Email and authProvider are required' });
    }

    // Create user
    const user = await prisma.user.create({
      data: {
        email,
        authProvider
      }
    });

    res.status(201).json({
      success: true,
      data: user
    });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ 
      error: 'Failed to create user',
      details: error.message
    });
  }
};

module.exports = {
  createUser
}; 