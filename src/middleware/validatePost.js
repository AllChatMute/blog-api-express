const posts = require("../data/postsData");

function validatePost(req, res, next) {
  try {
    if (req.headers["content-type"] === "application/json") {
      const body = req.body;
      if (
        "title" in body &&
        "content" in body &&
        "category" in body &&
        "tags" in body &&
        Array.isArray(body["tags"])
      ) {
        req.body = {
          id: posts[posts.length - 1]?.id + 1 || 1,
          ...body,
          createdAt: new Date().toLocaleTimeString(),
          updatedAt: new Date().toLocaleTimeString(),
        };
        next();
      } else throw "Validation error";
    } else {
      res.status(400).send("Post must be in JSON format");
    }
  } catch (error) {
    res.status(400).send("Post validation error");
  }
}

module.exports = validatePost;
