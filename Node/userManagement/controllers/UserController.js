import User from "../models/User.js";

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
        
        if(name == undefined || email == undefined || password == undefined || role == undefined){
            res.status(400);
            res.json({err: "Informações incompletas para o cadastro de um usuário"});
        }else{
            try {
                let emailValidation = await User.findEmail(email);
                if(emailValidation){
                    res.status(406);
                    res.json({err: "Email já está cadastrado"});
                }

                await User.create(name, email, password, role);
                res.status(200);
                res.send("Usuário criado com sucesso");
            } catch (error) {
                res.json({err: "Erro durante a criação do usuário!"});
            }
        }
        
        return;
    }

    async getUser(req, res){
        let id = req.params.id;

        if(id == undefined){
            res.status(400);
            res.json({err: "Informações incompletas para o cadastro de um usuário"});
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
}

export default new UserController();