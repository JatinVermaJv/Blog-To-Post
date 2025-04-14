const prisma = require('../lib/prisma');

const getAllPosts = async (req, res) => {
  try {
    const posts = await prisma.processedPost.findMany({
      include: {
        socialPosts: true
      }
    });
    res.json(posts);
  } catch (error) {
    console.error('Error fetching posts:', error);
    res.status(500).json({ error: 'Failed to fetch posts' });
  }
};

const getPostById = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await prisma.processedPost.findUnique({
      where: { id },
      include: {
        socialPosts: true
      }
    });

    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }

    res.json(post);
  } catch (error) {
    console.error('Error fetching post:', error);
    res.status(500).json({ error: 'Failed to fetch post' });
  }
};

const createPost = async (req, res) => {
  try {
    const { originalUrl, summary, userId, socialPosts } = req.body;

    const post = await prisma.processedPost.create({
      data: {
        originalUrl,
        summary,
        userId,
        socialPosts: {
          create: socialPosts
        }
      },
      include: {
        socialPosts: true
      }
    });

    res.status(201).json(post);
  } catch (error) {
    console.error('Error creating post:', error);
    res.status(500).json({ error: 'Failed to create post' });
  }
};

const updatePost = async (req, res) => {
  try {
    const { id } = req.params;
    const { originalUrl, summary, socialPosts } = req.body;

    const post = await prisma.processedPost.update({
      where: { id },
      data: {
        originalUrl,
        summary,
        socialPosts: {
          updateMany: socialPosts.map(post => ({
            where: { id: post.id },
            data: post
          }))
        }
      },
      include: {
        socialPosts: true
      }
    });

    res.json(post);
  } catch (error) {
    console.error('Error updating post:', error);
    res.status(500).json({ error: 'Failed to update post' });
  }
};

const deletePost = async (req, res) => {
  try {
    const { id } = req.params;

    await prisma.processedPost.delete({
      where: { id }
    });

    res.status(204).send();
  } catch (error) {
    console.error('Error deleting post:', error);
    res.status(500).json({ error: 'Failed to delete post' });
  }
};

module.exports = {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost
}; 