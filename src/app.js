const express = require("express");
const path = require("path");
const morgan = require("morgan");
const mysql =  require("mysql");
const myConnection = require("express-myconnection");
const mysql2 = require("mysql2");

const app = express();

// importando rutas
const customerRoutes = require("./routes/customer");

// settings
app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// midlewares
app.use(morgan("dev")); //me permite reiniciar el servidor cada que se hace un cambio en el codigo
app.use(myConnection(mysql2, {
    host: "localhost",
    user: "root",
    password: "password",
    port: 3306,
    database: "crudnodejsmysql"
}, "single"));
app.use(express.urlencoded({extended: false}));

// routes
app.use("/", customerRoutes);

// archivos estaticos
app.use(express.static(path.join(__dirname, "public"))); //esta carpeta me permitira añadir más cosas al codigo

// iniciando server
app.listen(app.get("port"), () => {
    console.log("Server on port 3000");
});