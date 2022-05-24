import knex from "knex";

export default knex({
    client: "mysql2",
    connection: {
        host: "localhost",
        user: "root",
        password: "123456",
        database: "usermanagement"
    }
});