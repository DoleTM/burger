// Dependencies
var express = require("express");
var exphbs = require("express-handlebars");
var router = require("./controllers/burgers_controller.js");
var PORT = process.env.PORT || 8080;
var app = express();

// Serve static content/parse app body as JSON
app.use(express.static("./public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(router);

// Start server to begin listening to client requests
app.listen(PORT, function() {
  console.log("Server is listening on: http://localhost:" + PORT);
});