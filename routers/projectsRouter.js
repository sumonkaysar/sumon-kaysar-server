const { getAllProjects, getOneProject } = require("../controllers/projectsController")

const projectsRouter = require("express").Router()

projectsRouter.get("/", getAllProjects)

projectsRouter.get("/:id", getOneProject)

module.exports = projectsRouter
