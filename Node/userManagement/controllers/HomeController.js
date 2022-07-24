class HomeController{

    async index(req, res){
        res.send("APP EXPRESS!");
    }

    async validate(req, res){
        res.json({status: true});
    }
}

export default new HomeController();