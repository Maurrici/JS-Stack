import express from "express";
import auth from "../middleware/auth.js";
const router = express.Router();

// Model
import Game from "../models/Game.js";

router.get("/games", auth, async (req, res) => {
    try{
        const games = await Game.findAll();
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
            let game = await Game.findOne({
                where:{
                    id: id
                }
            });

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

    if(newGame.name != undefined && newGame.price != undefined && newGame.year != undefined){
        try{
            let g = await Game.create(newGame);

            res.sendStatus(200);
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
            let rowsDeleted = await Game.destroy({
                where:{
                    id: id
                }
            });

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
            let game = await Game.findOne({
                where:{
                    id: id
                }
            });
    
            if(game != undefined){
                let {name, price, year} = req.body;

                if(name != undefined) game.name = name;
                if(price != undefined) game.price = price;
                if(year != undefined) game.year = year;

                let g = await Game.update(game.dataValues, {
                    where:{
                        id: id
                    }
                });
                console.log(g);
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

export default router;