const client = require("./config")
const DB = client.db("sumonKaysarDB")

const usersCollection = DB.collection("users")

module.exports = {
    usersCollection,
}