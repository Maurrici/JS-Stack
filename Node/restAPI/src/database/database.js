import Sequelize from "sequelize";

const database = new Sequelize("apiGames", "root", "123456", {
    dialect: "mysql",
    host: "localhost"
});

export default database;