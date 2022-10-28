const fetch = require("node-fetch-commonjs");
fetch("http://127.0.0.1:8000/articles")
    .then(res => res.json())
    .then(data => console.log(data))