// Dependencies
var express = require("express");
var burger = require("../models/burger.js");

var router = express.Router();

// GET Route
router.get("/", function (req, res){
    burger.select(function(data){
        var hbsObject = {
            burgers: data
        };
        res.render("index", hbsObject);
    });
});

// POST Route
router.post("/api/burgers", function (req, res){
    burger.insert(req.body.burger_name, function(result){
        res.json({ id: result.insertId });
    });
});

// PUT Route
router.put("/api/burgers/:id", function(req, res){
    burger.update(parseInt(req.params.id), function(result){
        if (result.affectedRows == 0){
            return res.status(404).end();
        } else {
            res.status(200).end();
        };
    });
});

module.exports = router;