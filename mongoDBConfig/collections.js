const client = require("./config")
const DB = client.db("sumonKaysarDB")

const usersCollection = DB.collection("users")
const skillsCollection = DB.collection("skills")
const projectsCollection = DB.collection("projects")

module.exports = {
    usersCollection,
    skillsCollection,
    projectsCollection,
}