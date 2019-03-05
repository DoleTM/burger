var connection = require("../config/connection.js");

function printQuestionMarks(num) {
    var arr = [];
    for (let i = 0; i < num; i++) {
        arr.push("?");
    };
    return arr.toString();
};

function objectToSQL(object) {
    var arr = [];
    for (var key in object) {
        var value = object[key];
        if (Object.hasOwnProperty.call(object, key)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            };
            arr.push(key + "=" + value);
        };
    };
    return arr.toString();
};

var orm = {
    selectAll: function (tableInput, callback) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function (err, data) {
            if (err) throw err;
            callback(data);
            res.render("index", { burgers: data });
        });
    },

    insertOne: function insertOne(table, columns, values, callback) {
        var queryString = "INSERT INTO" + table;
        queryString += " (";
        queryString += columns.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(values.length);
        queryString += ") ";

        connection.query(queryString, values, function (err, data) {
            if (err) throw err;
            callback(data);
            res.render("index", { burgers: data });
        });
    },

    updateOne: function (table, objectColValues, condition, callback) {
        var queryString = "UPDATE " + table;
        queryString += " SET ";
        queryString += objectToSQL(objectColValues);
        queryString += " WHERE ";
        queryString += condition;
        console.log(queryString);

        connection.query(queryString, function (err, res) {
            if (err) throw err;
            callback(res);
        });
    },
};

module.exports = orm;