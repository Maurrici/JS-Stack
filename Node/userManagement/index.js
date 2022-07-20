import bodyParser from 'body-parser';
import express from 'express';
import router from "./routes/routes.js";

const app = express();
 
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use("/",router);

app.listen(3000,() => {
    console.log("Server is running");
});
