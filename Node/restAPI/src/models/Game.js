import Sequelize from "sequelize";
import database from "../database/database.js";

const Game = database.define("games", {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    year: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    price: {
        type: Sequelize.FLOAT,
        allowNull: false
    }
});

Game.sync({force: false});

export default Game;