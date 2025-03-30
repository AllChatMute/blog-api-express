const posts = require("../data/postsData");

function getPosts(req, res) {
  res.send(posts);
}

function getSinglePost(req, res) {
  const { id } = req.params;

  const foundedpost = posts.find((item) => item.id === +id);
  if (foundedpost) {
    res.json(foundedpost);
  } else {
    res.status(404).send("Not Found");
  }
}

function createPost(req, res) {
  posts.push(req.body);
  res.status(201).send("Post created");
}

module.exports = { getPosts, getSinglePost, createPost };
