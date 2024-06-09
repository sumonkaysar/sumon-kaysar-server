const express = require('express')
const cors = require('cors')
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config()

const port = process.env.PORT || 5000
const app = express()

app.use(cors())

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.zuoxzfe.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
  try {
    const skillsCollection = client.db("skPortfolio").collection("skills")

    app.get("/skills", async (req, res) => {
      const query = {}
      const skills = await skillsCollection.find(query).toArray()

      res.send(skills)
    })
  } finally { }
}

run().catch(err => console.error(err))

app.get("/", (req, res) => {
  res.send("SK portfolio Server is running")
})

app.listen(port, () => {
  console.log("Server is running on port", port);
})