const { ObjectId } = require("mongodb")
const { projectsCollection } = require("../mongoDBConfig/collections")

const saveProject = async (req, res) => {
    const project = req.body
    const result = await projectsCollection.insertOne(project)
    res.json(result)
}

const getAllProjects = async (req, res) => {
    const projects = await projectsCollection.find({}).toArray()
    res.json(projects)
}

const getOneProject = async (req, res) => {
    const { id } = req.params
    const project = await projectsCollection.findOne({ _id: new ObjectId(id)})
    res.json(project)
}

module.exports = {
    saveProject,
    getAllProjects,
    getOneProject,
}