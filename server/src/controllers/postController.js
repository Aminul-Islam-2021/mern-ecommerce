const Post = require(".././models/postModel");

// Create post
// Route : http://localhost:8000/api/post/create-post
// Method : POST
// Access : Public
const createPost = async (req, res) => {
  const { title, description } = req.body;
  try {
    if (!title || !description) {
      return res.status(400).send("Please fill all the fields");
    }
    const post = await Post.create({ title, description });
    if (!post) {
      return res.status(400).send("Something went wrong ");
    }
    return res.status(201).send({
      success: true,
      message: "Created a new post",
      post,
    });
  } catch (error) {
    res.status(404).send("Something went wrong");
  }
};

// Get All Posts
// Route : http://localhost:8000/api/post/get-all-posts
// Method : GET
// Access : Public
const getAllPosts = async (req, res) => {
  try {
    const allPost = await Post.find();
    if (!allPost) {
      return res.status(400).send("Posts not found ");
    }
    if (allPost.length <= 0) {
      return res.status(200).send("No post found");
    }
    return res.status(200).send({
      success: true,
      message: "Get all posts",
      Total: allPost.length,
      allPost,
    });
  } catch (error) {
    res.status(404).send("Something went wrong");
  }
};

// Get single post
// Route : http://localhost:8000/api/post/get-single-post/:id
// Method : GET
// Access : Public
<<<<<<< HEAD
const getSinglePost = async (req, res) => {
  const { id } = req.params;
  try {
    const singlePost = await Post.findById(id);
    console.log(singlePost);
    if (!singlePost) {
      return res.status(400).send("Post not founnd ");
=======
const getSinglePost=async(req,res)=>{
  const {id} = req.params;
  try{
    const singlePost = await Post.findById(id)
    if(!singlePost){
      return res.status(400).send("Post not founnd ")
>>>>>>> c33e7187f1c87723c6e1bee100b61b6e362522dc
    }
    return res.status(200).send({
      success: true,
      message: "Get a single post",
      singlePost,
    });
  } catch (error) {
    res.status(404).send("Something went wrong");
  }
};

// Update Post
// Route : http://localhost:8000/api/post/update-post/:id
// Method : PUT
// Access : Public
const updatePost = async (req, res) => {
  const { title, description } = req.body;
  const { id } = req.params;
  try {
    const updatedPost = await Post.findByIdAndUpdate(
      id,
      { title, description },
      { new: true }
    );
    if (!updatedPost) {
      return res.status(400).send("Post not updated");
    }
    return res.status(201).send({
      success: true,
      message: "Post updated successfully",
      updatedPost,
    });
  } catch (error) {
    res.status(404).send("Something went wrong");
  }
};

//   Delete Post
// Route : http://localhost:8000/api/post/delete-post/:id
// Method : DELETE
// Access : Public
const deletePost = async (req, res) => {
  const { id } = req.params;
  try {
    const deletePost = await Post.findByIdAndDelete(id);
    if (!deletePost) {
      return res.status(400).send("Post not founnd ");
    }
    return res.status(200).send({
      success: true,
      message: "Post deleted successfully uploaded ",
      deletePost,
    });
  } catch (error) {
    res.status(404).send("Something went wrong");
  }
};

module.exports = {
  createPost,
  getAllPosts,
  getSinglePost,
  updatePost,
  deletePost,
};
