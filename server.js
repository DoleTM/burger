// Dependencies
var express = require("express");
var exphbs = require("express-handlebars");
var PORT = process.env.PORT || 3306;
var app = express();

// Serve static content/parse app body as JSON
app.use(express.static("public"));
app.use(express.json());
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes from burgers_controller.js and give the server access
var router = require("./controllers/burgers_controller.js");

app.use(router);

// Start server to begin listening to client requests
app.listen(PORT, function() {
  console.log("Server is listening on: http://localhost:" + PORT);
});