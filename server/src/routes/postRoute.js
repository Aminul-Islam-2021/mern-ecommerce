const router = require("express").Router();
const  {
  createPost,getAllPosts,getSinglePost,
  updatePost,deletePost
} = require(".././controllers/postController")

router.post("/create-post",createPost)
router.get("/get-all-posts",getAllPosts)
router.get("/get-single-post/:id",getSinglePost)
router.put("/update-post/:id",updatePost)
router.delete("/delete-post/:id",deletePost)


module.exports = router;
