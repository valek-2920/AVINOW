const express = require("express");
const app = express();
const cors = require("cors");
const database = require("./src/configs/database");

//MIDDLEWARE
app.use(cors());
app.use(express.json());

//ROUTES
app.use(require("./src/routes/userRoutes"));

app.listen(3500, () => console.log("API Server is running..."));
