const { skillsCollection } = require("../mongoDBConfig/collections")

const getAllSkills = async (req, res) => {
    const skills = await skillsCollection.find({}).toArray()
    res.json(skills)
}

const getMernSkills = async (req, res) => {
    const skills = await skillsCollection.find({ tags: "mern" }).toArray()
    res.json(skills)
}

module.exports = {
    getAllSkills,
    getMernSkills,
}