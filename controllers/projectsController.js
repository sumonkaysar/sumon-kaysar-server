const { projectsCollection } = require("../mongoDBConfig/collections")

const getAllProjects = async (req, res) => {
    const projects = await projectsCollection.find({}).toArray()
    res.json(projects)
}

module.exports = {
    getAllProjects,
}