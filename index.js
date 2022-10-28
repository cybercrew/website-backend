const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const articleJSON = require("./articles.json")
require("dotenv").config()

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/articles", async (req,res) => {
    res.send(articleJSON)
})

app.listen(process.env.PORT, console.log("Listening to port " + process.env.PORT))