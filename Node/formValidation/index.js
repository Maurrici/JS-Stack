import express from "express";
import bodyParser from "body-parser";
import session from "express-session";
import flash from "express-flash";
import cookieParser from "cookie-parser";

const app = express();

// Settings
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.set("view engine", 'ejs');

app.use(cookieParser("MMS"));
app.use(session({
    secret: "MMS",
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 60000}
}));

app.use(flash());

app.get("/", (req, res) => {
    let nameError = req.flash("nameError");
    let emailError = req.flash("emailError");
    let ageError = req.flash("ageError");
    let passwordError = req.flash("passwordError");
    let oldData = req.flash("oldData");

    nameError = (nameError == undefined || nameError.length == 0) ? undefined : nameError;
    emailError = (emailError == undefined || emailError.length == 0) ? undefined : emailError;
    ageError = (ageError == undefined || ageError.length == 0) ? undefined : ageError;
    passwordError = (passwordError == undefined || passwordError.length == 0) ? undefined : passwordError;
    oldData = (oldData == undefined || oldData.length == 0) ? {name: "", age: undefined, email: "", password: ""} : oldData[0];

    res.render("index.ejs", {nameError, emailError, ageError, passwordError, oldData});
});

app.post("/validation", (req, res) => {
    let {name, age, email, password, passwordConfirm} = req.body;

    let nameError;
    let ageError;
    let emailError;
    let passwordError;

    if(name == undefined || name == ""){
        nameError = "Este campo é obrigatório!";
    }

    if(age == undefined || age < 10){
        ageError = "Essa idade é inválida!";
    }

    if(email == undefined || email == ""){
        emailError = "Este campo é obrigatório!";
    }

    if(password == undefined || passwordConfirm == undefined || password == "" || passwordConfirm == ""){
        passwordError = "Senha inválida!";
    }else if(password != passwordConfirm){
        passwordError = "Senhas não iguais!";
    }

    if(nameError != undefined || emailError != undefined || ageError != undefined || passwordError != undefined){
        req.flash("nameError", nameError);
        req.flash("emailError", emailError);
        req.flash("ageError", ageError);
        req.flash("passwordError", passwordError);
        req.flash("oldData", {name, age, email, password, passwordConfirm});
        res.redirect("/");       
    }else{
        res.send("Formulário Enviado com sucesso");
    }

    
});

app.listen(3000, () =>{
    console.log("Server is running...");
});
