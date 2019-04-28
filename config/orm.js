var connection = require("../config/connection.js");

var orm = {
    select: function (tableInput, callback) {
        var queryString = "SELECT * FROM ??;";
        connection.query(queryString, [tableInput], function (err, data) {
            if (err) throw err;
            callback(data);
        });
    },

    insert: function insertOne(table, col, value, callback) {
        var queryString = "INSERT INTO ?? (??) VALUES (?);";
        connection.query(queryString, [table, col, value], function (err, data) {
            if (err) throw err;
            callback(data);
        });
    },

    update: function (table, col, value, conditionCol, conditionValue, callback) {
        var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
        connection.query(queryString[table, col, value, conditionCol, conditionValue], function (err, res) {
            if (err) throw err;
            callback(res);
        });
    }
};

// This will be exported to (models/burger.js)
module.exports = orm;