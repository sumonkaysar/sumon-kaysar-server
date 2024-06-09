const { ObjectId } = require("mongodb")
const { blogsCollection } = require("../mongoDBConfig/collections")

const getAllBlogs = async (req, res) => {
    const blogs = await blogsCollection.find({}).toArray()
    const recentBlogs = blogs.reverse().slice(0, 8)
    const adventureBlogs = blogs.filter(blog => blog.category === "Adventure")
    const destinationBlogs = blogs.filter(blog => blog.category === "Destinations")
    const popularBlogs = blogs.sort((a, b) => b.likes - a.likes).slice(0, 2)
    res.json({ blogs, recentBlogs, adventureBlogs, destinationBlogs, popularBlogs })
}

const getMyBlogs = async (req, res) => {
    const { email } = req.params
    const blogs = await blogsCollection.find({ "author.email": email }).toArray()
    res.json(blogs)
}

const saveBlog = async (req, res) => {
    const blog = req.body
    const result = await blogsCollection.insertOne(blog)
    res.json(result)
}

const getOneBlog = async (req, res) => {
    const { id } = req.params
    const blog = await blogsCollection.findOne({ _id: new ObjectId(id) })
    res.json(blog)
}

const updateBlog = async (req, res) => {
    const { id } = req.params
    const updatedInfo = req.body
    const result = await blogsCollection.updateOne({ _id: new ObjectId(id) }, { $set: updatedInfo })
    res.json(result)
}

const deleteBlog = async (req, res) => {
    const { id } = req.params
    const result = await blogsCollection.deleteOne({ _id: new ObjectId(id) })
    res.json(result)
}

const searchBlogs = async (req, res) => {
    const { title } = req.query
    const blogs = await blogsCollection.find({'title': {'$regex': title, '$options': 'i'}}).toArray()
    res.json(blogs)
}

module.exports = {
    getAllBlogs,
    getMyBlogs,
    saveBlog,
    getOneBlog,
    updateBlog,
    deleteBlog,
    searchBlogs,
}