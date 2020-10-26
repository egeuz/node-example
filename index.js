const express = require('express')
const path = require('path')
const axios = require('axios')
const app = express()
require('dotenv').config()

//IMPORT THE FILE FIRST
// const data = require('./dummy.json');

app.use(express.static('public'))

app.get("/api", async function(req, res) {
  const dataset = await axios.get(process.env.API_ENDPOINT)
  res.json(dataset.data);
})

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`cooking things up at ${PORT}`))

app.use((req, res, next) => {
  res.status(404).sendFile(path.resolve(__dirname, "notfound.html"));
});