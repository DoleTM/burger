var express = require("express");
var exphbs = require("express-handlebars");
var mysql = require("mysql");

var app = express();
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Nested below is the setup code to connect node to mysql
var connection = require("/config/connection.js");

// Nested below is the 
var orm = require("/config/orm.js");
orm.selectAll();

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);
});

app.listen(PORT, function() {
  console.log("Server is listening on PORT: " + PORT);
});