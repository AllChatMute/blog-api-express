const express = require("express");
const validatePost = require("../middleware/validatePost");
const {
  getPosts,
  getSinglePost,
  createPost,
} = require("../controllers/postsController");

const router = express.Router();

router.get("/", getPosts);
router.get("/:id", getSinglePost);

router.post("/", validatePost, createPost);

module.exports = router;
