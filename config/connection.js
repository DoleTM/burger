var mysql = require("mysql");

var PORT = process.env.PORT || 3306;

var connection;
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        port: PORT,
        user: "root",
        password: "yourRootPassword",
        database: "burgers_db"
    });

    // var jawsdb = {
    //     host: "q68u8b2buodpme2n.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    //     port: PORT,
    //     user: "idkwnromt7tksko2",
    //     password: "eoftnawqgv9r7dcn",
    //     database: "j0pa45y76zy2evde"
    // }
};

connection.connect(function (err) {
    if (err) {
        console.error("Error connecting: " + err.stack);
        return;
    };
    console.log("Connected as id: " + connection.threadId);
});

// This will be exported to orm.js
module.exports = connection;