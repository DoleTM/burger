var connection = require("../config/connection.js");

var orm = {
    selectAll: function (tableInput, callback) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function (err, data) {
            if (err) throw err;
            callback(data);
        });
    },

    insertOne: function insertOne(table, burgerInput, callback) {
        var queryString = "INSERT INTO" + table + " (burgerName)" + "VALUES (?);";
        connection.query(queryString, [burgerInput], function (err, data) {
            if (err) throw err;
            callback(data);
        });
    },

    updateOne: function (table, id, callback) {
        var queryString = "UPDATE " + table + " SET devoured = 1 " + "WHERE id=?;";
        connection.query(queryString[id], function (err, res) {
            if (err) throw err;
            callback(res);
        });
    }
};

// This will be exported to (models/burger.js)
module.exports = orm;