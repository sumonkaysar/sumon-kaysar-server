
const { getAllCategories } = require("../controllers/categoriesController")
const verifyUser = require("../middlewares/verifyUsers")

const categoriesRouter = require("express").Router()

categoriesRouter.get("/", verifyUser, getAllCategories)

module.exports = categoriesRouter