// Dependencies
var express = require("express");
var burgers = require("../models/burger.js");

var router = express.Router();

router.get("/", function (req, res){
    burgers.selectAll(function(data){
        var hbsObject = {
            burgers: data
        };
        res.render("index", hbsObject);
    });
    console.log("get");
});

router.post("/api/burgers", function (req, res){
    burgers.insertOne([
        "burger_name"
    ],[
        req.body.burger_name
    ], function(result){
        res.json({ id: result.insertId});
    });
    console.log("post");
});

router.put("/api/burgers/:id", function(req, res){
    var condition = "id = " + req.params.id;
    burgers.updateOne({
        devoured: req.body.devoured
    }, condition, function(result){
        if (result.affectedRows == 0){
            return res.status(404).end();
        } else {
            res.status(200).end();
        };
    });
    console.log("put");
});

// This is exported to the server.js file
module.exports = router;