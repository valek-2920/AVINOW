const DataBase = require(pg).Pool;

const database = new Pool({
        user: "usernmae",
        password: "password",
        host: "server name",
        port: 5432,
        database: "database name"
    });

module.exports = DataBase;