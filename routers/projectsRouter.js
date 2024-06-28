const { getAllProjects } = require("../controllers/projectsController")

const projectsRouter = require("express").Router()

projectsRouter.get("/", getAllProjects)

module.exports = projectsRouter
