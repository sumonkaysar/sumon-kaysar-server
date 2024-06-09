const { categoriesCollection } = require("../mongoDBConfig/collections")

const getAllCategories = async (req, res) => {
    const categories = await categoriesCollection.find({}).toArray()
    res.json(categories)
}

module.exports = {
    getAllCategories,
}