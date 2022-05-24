import express from 'express';
import bodyParser from 'body-parser';
import router from './routes/route.js';

const app = express();

// Config body-parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// ---------------- Routes ------------------
app.use("", router);

app.listen(3000, (err) => {
    if(err == undefined){
        console.log("Server is running...");
    }else{
        console.log("Error: ", err);
    }
});