let express = require("express");
let mongoose = require("mongoose");
const app = express();
let router = require("./routes/index.js");


app.use(express.urlencoded({extended: false}));
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/imgShared");

app.use("", router);

module.exports = app;