const { saveBlog, getOneBlog, updateBlog, deleteBlog, getAllBlogs, getMyBlogs, searchBlogs } = require("../controllers/blogsController")
const verifyUser = require("../middlewares/verifyUsers")


const blogsRouter = require("express").Router()

blogsRouter.get("/", getAllBlogs)

blogsRouter.get("/my/:email", verifyUser, getMyBlogs)

blogsRouter.post("/", verifyUser, saveBlog)

blogsRouter.get("/search", searchBlogs)

blogsRouter.get("/:id", verifyUser, getOneBlog)

blogsRouter.patch("/:id", verifyUser, updateBlog)

blogsRouter.delete("/:id", verifyUser, deleteBlog)

module.exports = blogsRouter