import database from "./database.js";

// Insert
function insertData(){
    let newGame = {
        name: "Dead Cells",
        price: 17.50,
        year: 2019
    }
    
    database.insert(newGame).into("games")
        .then(data => {
            console.log("Dado inserido com sucesso!\n", data);
        })
        .catch(err => {
            console.log("ERROR: ", err);
        });
}

// Select
function selectData(){
    database.select().table("games")
        .then(data => {
            console.log("Todos os dados:\n", data);
        })
        .catch(err => {
            console.log(err);
        });

    database.select(["name", "year"]).table("games")
        .then(data => {
            console.log("Todos os dados com filtro de campos:\n",data);
        })
        .catch(err => {
            console.log(err);
        });

    database.select().whereRaw("year > 2015").table("games")
        .then(data => {
            console.log("Dados filtrados por ano:\n", data);
        }).catch(err => {
            console.log(err);
        });
}

// Delete
function deleteData(){
    database.where({id: 3}).delete().table("games")
        .then(data => {
            console.log(`${data} deletado com sucesso!`);
        })
        .catch(err => {
            console.log(err);
        });
}

// Update
function updateData(){
    database.where({name: "Rayman Legends"}).update({year: 2013}).table("games")
        .then(data => {
            console.log("Edição realizada! ", data);
        })
        .catch(err => {
            console.log(err);
        });
}

/*
database.select(["games.*", "studios.name as studio_name"])
        .table("games")
        .leftJoin("studios", "studios.game_id", "games.id")
        .then(data => {
            let games = [];
            console.log(data);
            data.forEach(item => {
                let game = games.find(element => {
                    if(element.id == item.id){
                        element.studios.push({
                            name: item.studio_name
                        });

                        return element;
                    }
                });

                if(game == undefined){
                    let newGame = {
                        id: item.id,
                        name: item.name,
                        year: item.year,
                        price: item.price
                    }
                    newGame.studios = item.studio_name != null ? [{name: item.studio_name}] : [];

                    games.push(newGame);
                }
            });

            console.log(games);
        });
*/

async function manyToMany(){
    let relation = [
        {
            game_id: 1,
            studio_id: 1
        },
        {
            game_id: 1,
            studio_id: 2
        },
        {
            game_id: 1,
            studio_id: 3
        },
        {
            game_id: 1,
            studio_id: 4
        },
        {
            game_id: 2,
            studio_id: 2
        },
        {
            game_id: 2,
            studio_id: 3
        },
        {
            game_id: 4,
            studio_id: 3
        },
    ]

    try {
        await database.transaction(async trans => {
            await database.insert(relation).into("games_studios");
            let data = await database.select(["games.*", "studios.name as studio_name"])
                    .table("games_studios")
                    .leftJoin("games", "games.id", "games_studios.game_id")
                    .leftJoin("studios", "studios.id", "games_studios.studio_id");
            
            let games = [];
            console.log(data);
            data.forEach(item => {
                let game = games.find(element => {
                    if(element.id == item.id){
                        element.studios.push({
                            name: item.studio_name
                        });

                        return element;
                    }
                });

                if(game == undefined){
                    let newGame = {
                        id: item.id,
                        name: item.name,
                        year: item.year,
                        price: item.price
                    }
                    newGame.studios = item.studio_name != null ? [{name: item.studio_name}] : [];

                    games.push(newGame);
                }
            });

            console.log(games);
        });
    } catch (error) {
        console.log(error);
    }
}

manyToMany();