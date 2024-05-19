const express = require("express");
const router = express.Router();
const commentController = require("../controllers/CommentController");
router.get("/comments", commentController.fetchComments);
router.post("/comments", commentController.addComment);

module.exports = router;
