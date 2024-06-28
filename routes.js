const projectsRouter = require("./routers/projectsRouter")
const skillsRouter = require("./routers/skillsRouter")
const usersRouter = require("./routers/usersRouter")

module.exports = function routes(app) {
    app.use("/users", usersRouter)
    app.use("/skills", skillsRouter)
    app.use("/projects", projectsRouter)
}
