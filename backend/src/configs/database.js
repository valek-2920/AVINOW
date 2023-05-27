const Pool = require(pg).Pool;

const pool = new Pool({
    user: "username",
    password: "password",
    host: "server",
    port: 5432,
    database: "database name"
});