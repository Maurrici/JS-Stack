class HomeController{

    async index(req, res){
        res.send("Bem vindo à sua aplicação");
    }
}

export default new HomeController;