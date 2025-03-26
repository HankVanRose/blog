const router = require('express').Router();

const { Post } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const posts = await Post.findAll();
    if (!posts) {
      return res.status(400).json({ message: 'No likes' });
    }
    return res.status(200).json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error });
  }
});

router.patch('/like/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, isLiked } = req.body;
    const result = await Post.update(
      { title, description, isLiked },
      { where: { id } }
    );
    return res.status(200).json({ message: 'Like updated' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error });
  }
});

module.exports = router;
