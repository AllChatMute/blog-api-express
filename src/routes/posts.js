const express = require("express");
const validatePost = require("../middleware/validatePost");
const {
  getPosts,
  getSinglePost,
  createPost,
  updatePost,
} = require("../controllers/postsController");

const router = express.Router();

router.get("/", getPosts);
router.get("/:id", getSinglePost);

router.post("/", validatePost, createPost);
router.put("/:id", validatePost, updatePost);

module.exports = router;
