var mysql = require("mysql");

var PORT = process.env.PORT || 3000;

var connection = mysql.createConnection({
        host: "localhost",
        port: PORT,
        user: "root",
        password: "yourRootPassword",
        database: "burgers_db"
    });

connection.connect(function (err) {
    if (err) {
        console.error("Error connecting: " + err.stack);
        return;
    };
    console.log("Connected as id: " + connection.threadId);
});

// This will be exported to orm.js
module.exports = connection;