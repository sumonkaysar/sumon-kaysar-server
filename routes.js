const blogsRouter = require("./routers/blogsRouter")
const categoriesRouter = require("./routers/categoriesRouter")
const usersRouter = require("./routers/usersRouter")

module.exports = function routes(app) {
    app.use("/users", usersRouter)
    app.use("/blogs", blogsRouter)
    app.use("/categories", categoriesRouter)
}