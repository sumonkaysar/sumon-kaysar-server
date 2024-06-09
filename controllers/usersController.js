const jwt = require("jsonwebtoken")
const { usersCollection, blogsCollection, categoriesCollection } = require("../mongoDBConfig/collections")

const saveUser = async (req, res) => {
    const user = req.body
    const result = await usersCollection.insertOne(user)
    const token = jwt.sign({ user: { email: user.email } }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '7d' })
    res.json({ result, token })
}

const saveProviderUser = async (req, res) => {
    const user = req.body
    const existedUser = await usersCollection.findOne({ email: user.email })
    const token = jwt.sign({ user: { email: user.email } }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '7d' })
    if (existedUser?.email) {
        return res.json({ token })
    }
    const result = await usersCollection.insertOne(user)
    res.json({ result, token })
}

const getOneUser = async (req, res) => {
    const { email } = req.params
    const user = await usersCollection.findOne({ email })
    res.json(user)
}

const updateUser = async (req, res) => {
    const { email } = req.params
    const updatedInfo = req.body
    const result = await usersCollection.updateOne({ email }, { $set: updatedInfo })
    res.json(result)
}

const getDashboardData = async (req, res) => {
    const { email } = req.params
    const totalBlogs = await blogsCollection.countDocuments()
    const totalUsers = await usersCollection.countDocuments()
    const totalCategories = await categoriesCollection.countDocuments()
    const blogs = await blogsCollection.find({}).toArray()
    const adventureBlogs = blogs.filter(blog => blog.category === "Adventure")
    const popularBlogs = blogs.sort((a, b) => b.likes - a.likes).slice(0, 2)
    const myBlogs = await blogsCollection.find({ "author.email": email }).toArray()
    res.json({ totalBlogs, totalCategories, totalUsers, adventuredBlogs: adventureBlogs.length, popularBlogs: popularBlogs.length, myBlogs: myBlogs.length })
}

module.exports = {
    saveUser,
    saveProviderUser,
    getOneUser,
    updateUser,
    getDashboardData,
}