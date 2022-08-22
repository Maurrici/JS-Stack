let User = require("../models/User.js");
let bcrypt = require("bcrypt");
let jwt = require("jsonwebtoken");
let JWTSecret = "MMSMMSMMSMMSMMSMMS";

class UserController{
    async Create(req, res){
        try {
            let {name, email, password} = req.body;

            if(name == "" || email == "" || password == "") {
                res.sendStatus(400);
                return;
            }

            let emailValidation = await User.findOne({'email': email});
            if(emailValidation != undefined){
                res.status(400);
                res.json({message: "Email já cadastrado!"});
                return
            }

            let salt = await bcrypt.genSalt(10);
            let hash = await bcrypt.hash(password, salt);

            let newUser = new User({
                name,
                email,
                password: hash
            });

            await newUser.save();

            res.json({email});
        } catch (error) {
            res.sendStatus(500);
        }
    }

    async Delete(req, res){
        let email = req.params.email;

        await User.deleteOne({'email': email});
        res.sendStatus(200);
    }

    async Login(req, res){
        try {
            let {email, password} = req.body;

            let user = await User.findOne({'email': email});
            if(user == undefined){
                res.status(403);
                res.json({message: "Email não cadastrado!"});
                return;
            }

            let isValid = await bcrypt.compare(password, user.password);
            if(!isValid){
                res.status(403);
                res.json({message: "Senha incorreta!"});
                return;
            }

            let token = jwt.sign({email, name: user.name, id: user._id}, JWTSecret, {expiresIn:'48h'});
            res.json({token});

        } catch (error) {
            res.sendStatus(500);
        }
    }
}

module.exports = new UserController();