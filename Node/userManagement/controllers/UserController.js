import User from "../models/User.js";
import PasswordToken from "../models/PasswordToken.js";
import jwt from "jsonwebtoken";
var JWTsecret = "MMSEBMMMSEBBMMMS";

class UserController{
    async index(req, res){
        try {
            let users = await User.findAll();
            res.json(users);
        } catch (error) {
            res.status(500);
            res.json(error);
        }
    }

    async create(req, res){
        let {name, email, password, role} = req.body;
        console.log(req.body);
        
        if(name == undefined || name.trim() == '' 
            || email == undefined || email.trim() == '' 
            || password == undefined || password.trim() == '' 
            || role == undefined || role.trim() == ''){
            res.status(400);
            res.json({message: "Informações incompletas para o cadastro de um usuário"});
        }else{
            try {
                let emailValidation = await User.findEmail(email);
                if(emailValidation){
                    res.status(406);
                    res.json({message: "Email já está cadastrado"});
                }

                await User.create(name.trim(), email.trim(), password.trim(), role);
                res.status(200);
                res.json({message: "Usuário criado com sucesso"});
            } catch (error) {
                res.status(500);
                res.json({message: "Erro durante a criação do usuário!"});
            }
        }
        
        return;
    }

    async getUser(req, res){
        let id = req.params.id;

        if(id == undefined){
            res.status(400);
            res.json({message: "Informações incompletas para o cadastro de um usuário"});
        }

        try {
            let user = await User.findById(id);

            if(user == undefined){
                res.status(404);
                res.json({});
            }else{
                res.json(user);
            }
        } catch (error) {
            res.status(500);
            res.json(error);
        }
    }

    async edit(req, res){
        try {
            let {id, email, name, role} = req.body;

            let result = await User.update(id, email, name, role);

            if(result.status){
                res.json({message: "Usuário editado com sucesso!"});
                return;
            }else{
                res.status(406);
                res.json({message: result.message});
            }
        } catch (error) {
            res.status(500);
            res.json(error);
        }
    }

    async delete(req, res){
        try {
            let id = req.params.id;

            let result = await User.delete(id);

            if(result.status){
                res.json({message: "Usuário deletado com sucesso!"});
                return;
            }else{
                res.status(406);
                res.json({message: result.message});
            }
        } catch (error) {
            res.status(500);
            res.json(error);
        }
    }

    async recoverPassword(req, res){
        let email = req.body.email;

        let result = await PasswordToken.create(email);

        if(result.status){
            res.json({token: result.token});
        }else{
            res.status(406);
            res.json({message: result.message});
        }
    }

    async changePassword(req, res){
        let {token, password} = req.body;

        let result = await PasswordToken.validate(token);

        if(result.status){
            await User.changePassword(password, result.token);
            res.json({message: "Sua senha foi alterada com sucesso!"});
        }else{
            res.status(406);
            res.json({message: result.message});
        }
    }

    async login(req, res){
        let {email, password} = req.body;

        let user = await User.findByEmail(email);

        if(user != undefined){
            let isPasswordCorrect = await User.comparePassword(user, password);

            if(isPasswordCorrect){
                let token = jwt.sign({email: user.email, name: user.name, role: user.role}, JWTsecret);
                res.json({status: false, token});
            }else{
                res.status(406);
                res.json({status: false, message: "Email ou senha estão incorretos"});
            }
            
        }else{
            res.status(404);
            res.json({status: false, message: "Usuário não existe!"});
        }
    }
}

export default new UserController();