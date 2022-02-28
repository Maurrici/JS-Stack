import Sequelize from "sequelize";

const database = new Sequelize("apiGames", "root", "admin", {
    dialect: "mysql",
    host: "localhost"
});

export default database;