import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

// Settings
const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

// Controllers
import GamesController from "./src/controllers/GamesController.js";
import UsersController from "./src/controllers/UsersController.js";

// Database
import DB from "./src/database/database.js";

// Routes
app.use("", GamesController);
app.use("", UsersController);

app.listen(3000, (err) =>{
    console.log("Server is running");
});
