const posts = require("../data/postsData");

function getPosts(req, res) {
  if (req.query.term) {
    const filteredPosts = posts.filter((item) => {
      if (
        item.title.toLowerCase().includes(req.query.term.toLowerCase()) ||
        item.content.toLowerCase().includes(req.query.term.toLowerCase()) ||
        item.category.toLowerCase().includes(req.query.term.toLowerCase()) ||
        item.tags.indexOf((term) =>
          term.toLowerCase().includes(req.query.term.toLowerCase())
        ) !== -1
      ) {
        return true;
      }
      return false;
    });

    res.json(filteredPosts);
  } else {
    res.json(posts);
  }
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

function updatePost(req, res) {
  const { id } = req.params;
  const index = posts.findIndex(
    (item) => item === posts.find((item) => item.id === +id)
  );

  if (index !== -1) {
    req.body.id = +id;
    posts[index] = req.body;
    res.send("Updated");
  } else {
    res.status(404).send("Not Found");
  }
}

function deletePost(req, res) {
  const { id } = req.params;
  const index = posts.findIndex(
    (item) => item === posts.find((item) => item.id === +id)
  );
  if (index !== -1) {
    posts.splice(index, 1);
    res.status(204).send("No Content");
  } else {
    res.status(404).send("Not Found");
  }
}

module.exports = {
  getPosts,
  getSinglePost,
  createPost,
  updatePost,
  deletePost,
};
