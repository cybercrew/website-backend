const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const articleJSON = require("./articles/articles.json")
require("dotenv").config()
let PORT = process.env.PORT
const cors = require('cors')

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/articles", async (req,res) => {
    res.send(articleJSON)
})

app.listen(PORT, console.log("Listening to port " + PORT))