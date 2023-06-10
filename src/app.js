const express = require("express");
const path = require("path");
const morgan = require("morgan");
const mysql =  require("mysql");
const myConnection = require("express-myconnection");
const mysql2 = require("mysql2");

const app = express();

// settings
app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// midlewares
app.use(morgan("dev"));
app.use(myConnection(mysql2, {
    host: "localhost",
    user: "root",
    password: "password",
    port: 3306,
    database: "crudnodejs"
}, "single"));

// routes

app.listen(app.get("port"), () => {
    console.log("Server on port 3000");
});