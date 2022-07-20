import knex from "knex";

var connection = knex({
    client: 'mysql2',
    connection: {
      host : '127.0.0.1',
      user : 'root',
      password : 'admin',
      database : 'user_manegement'
    }
  });

export default connection;