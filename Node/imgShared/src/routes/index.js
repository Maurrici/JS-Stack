let express = require("express");
let router = express.Router();

let UserController = require("../controller/UserController.js");

// Main route
router.get("/", (req, res) => {
    res.json({});
});

// Users routes
router.post("/user", UserController.Create);
router.delete("/user/:email", UserController.Delete);
router.post("/login", UserController.Login);

module.exports = router;