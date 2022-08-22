var express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.json({});
});

app.get("/user/:id", (req, res) => {
    let id = req.params.id;

    if(id == 1){
        res.json({
            name: "Maurício"
        });
    }
});

module.exports = app;