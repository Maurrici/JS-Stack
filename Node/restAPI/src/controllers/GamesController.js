import express from "express";
import auth from "../middleware/auth.js";
const router = express.Router();

// DB
import DB from "../database/database.js";

router.get("/games", auth, async (req, res) => {
    try{
        const games = await DB.select().table("games");
        res.statusCode = 200;
        res.json(games);
    }catch(err){
        console.log("Error: ", err);
        res.sendStatus(500);
    }
});

router.get("/game/:id", auth, async (req, res) => {
    if(!isNaN(req.params.id)){
        let id = parseInt(req.params.id);
        
        try{
            let game = await DB.select().where({id: id}).table("games").first();

            if(game != undefined){
                res.statusCode = 200;
                res.json(game);
            }else{
                res.sendStatus(404);
            }
        }catch(err){
            res.sendStatus(500);
        }    
    }else{
        res.sendStatus(400);
    }
});

router.post("/game", auth, async (req, res) => {
    let newGame = req.body;
    newGame.createdAt = new Date();
    newGame.updatedAt = newGame.createdAt;

    if(newGame.name != undefined && newGame.price != undefined && newGame.year != undefined){
        try{
            let existGame = await DB.select().where({name: newGame.name}).table("games").first();

            if(existGame == undefined) {
                await DB.insert(newGame).into("games");
                res.sendStatus(200);
            }else{
                console.log("Já existe");
                res.sendStatus(400);
            }
            
        }catch(err){
            res.sendStatus(500);
        }
    }else{
        res.sendStatus(400);
    }
});

router.delete("/game/:id", auth, async (req, res) => {
    if(!isNaN(req.params.id)){
        let id = parseInt(req.params.id);
        
        try {
            let rowsDeleted = await DB.where({id: id}).delete().table("games");

            if(rowsDeleted > 0){
                res.sendStatus(200);
            }else{
                res.sendStatus(404);
            }
        } catch (error) {
            res.sendStatus(500);
        }
    }else{
        res.sendStatus(400);
    }
});

router.put("/game/:id", auth, async (req, res) => {
    if(!isNaN(req.params.id)){
        let id = parseInt(req.params.id);
        
        try {
            let game = await DB.select().where({id: id}).table("games").first();
    
            if(game != undefined){
                let {name, price, year} = req.body;

                if(name != undefined) game.name = name;
                if(price != undefined) game.price = price;
                if(year != undefined) game.year = year;

                await DB.where({id: id}).update(game).table("games");
                res.sendStatus(200);
            }else{
                res.sendStatus(404);
            }
        } catch (error) {
            console.log(error)
            res.sendStatus(500);
        }
        
    }else{
        res.sendStatus(400);
    }
});

export default router;