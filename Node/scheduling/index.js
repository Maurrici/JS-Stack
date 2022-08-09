import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import ejs from "ejs";
import router from "./routes/routes.js";
import AppointmentService from "./src/services/AppointmentService.js";

// Server Config
const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.set("view engine", "ejs");
app.use(express.static("public"));

// Database connection
mongoose.connect("mongodb://127.0.0.1:27017/scheduling");

app.use('/', router);

// Notifications
const awaitTime = 1000 * 60 * 2;
setInterval(async () => {
    await AppointmentService.SendNotification();
}, awaitTime);

app.listen(3000, () => {
    console.log("Server is running...");
});