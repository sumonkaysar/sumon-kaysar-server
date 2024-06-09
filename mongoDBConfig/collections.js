const client = require("./config")
const DB = client.db("sumonKaysarDB")

const usersCollection = DB.collection("users")
const skillsCollection = DB.collection("skills")

module.exports = {
    usersCollection,
    skillsCollection,
}