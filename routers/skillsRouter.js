const { getAllSkills, getMernSkills } = require("../controllers/skillsController")

const skillsRouter = require("express").Router()

skillsRouter.get("/", getAllSkills)

skillsRouter.get("/mern", getMernSkills)

module.exports = skillsRouter
