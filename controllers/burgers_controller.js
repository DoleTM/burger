var express = require("express");
var burger = require("../models/burger.js");

var router = express.Router();

router.get("/", function (req, res){
    burger.selectAll(function(data){
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burger", function (req, res){
    burger.insertOne([
        "burger_name", "devoured"
    ],[
        req.body.devoured
    ], function(data){
        res.json({ id: data.insertId});
    });
});

router.put("/api/burger/:id", function(req, res){
    var condition = "id = " + req.params.id;

    burger.updateOne({
        devoured: req.body.devoured
    }, condition, function(result){
        if (result.affectedRows == 0){
            return res.status(404).end();
        } else {
            res.status(200).end();
        };
    });
});

module.exports = router;