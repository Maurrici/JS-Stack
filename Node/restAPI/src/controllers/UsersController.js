import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import JWTsecret from "../middleware/JWTsecret.js";
const router = express.Router();

// DB
import DB from "../database/database.js";

router.post("/user", async (req, res) => {
    let user = req.body;
    
    if(user.name != undefined && user.email != undefined && user.password != undefined){
        try {
            let existUser = await DB.select().where({email: user.email}).table("users").first();

            if(existUser == undefined){
                let salt = bcrypt.genSaltSync(10);
                let hash = bcrypt.hashSync(user.password, salt);
                user.password = hash;
                user.createdAt = new Date();
                user.updatedAt = user.createdAt;

                await DB.insert(user).into("users");
                res.sendStatus(200);
            }else{
                res.statusCode = 400;
                res.send({err: "O email já está cadastrado!"});
            }
        } catch (error) {
            res.sendStatus(500);
        }
    }else{
        res.statusCode = 400;
        res.send({err: "Os dados enviados são inválidos!"});
    }
});

router.post("/auth", async(req, res) => {
    let user = req.body;
    
    if(user.email != undefined && user.password != undefined){
        try {
            let existUser = await DB.select().where("email", user.email).table("users").first();

            let correct = (existUser != undefined) ? bcrypt.compareSync(user.password, existUser.password) : false;
            if(correct){
                jwt.sign({id: user.id,email: user.email}, JWTsecret, {expiresIn: '24h'}, (err, token) => {
                    if(err)res.sendStatus(500);
                    else{
                        res.statusCode = 200;
                        res.json({token: token, name: existUser.name});
                    }
                });
            }else{
                res.statusCode = 401;
                res.send({err: "Credenciais inválidas!"});
            }
        } catch (error) {
            res.sendStatus(500);
        }
    }else{
        res.statusCode = 400;
        res.send({err: "Os dados enviados são inválidos!"});
    }
});

export default router;