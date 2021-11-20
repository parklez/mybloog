const postModel = require('../../lib/mongo');

const publishPost = async (req, res) => {
  console.log(req.body);

  const incomingPost = postModel(req.body);

  try {
    const result = await incomingPost.save();
    return res.status(201).send(result);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = publishPost;