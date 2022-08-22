import bodyParser from 'body-parser';
import express from 'express';
import router from "./routes/routes.js";
import cors from "cors";

const app = express();
 
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use("/",router);

app.listen(3000,() => {
    console.log("Server is running");
});
