var mysql = require("mysql");
var express = require("express");

var app = express();

var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var connection = mysql.createConnection({
    host: "localhost",
    port: PORT,
    user: "root",
    password: "yourRootPassword",
    database: "burgers_db"
});

connection.connect(function(err){
    if (err) {
        console.error("Error connecting: " + err.stack);
        return;
    };
    console.log("Connected as id: " + connection.threadId);
});

module.exports = connection;