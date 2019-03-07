// Dependency
var orm = require("../config/orm.js");

var burger = {

   selectAll: function(callback){
      orm.selectAll("burgers", function (result) {
         callback(result);
      });
   },

   insertOne: function(columns, values, callback){
      orm.insertOne("burgers", columns, values, function(result){
         callback(result);
      });
   },

   updateOne: function(objectColumnVals, condition, callback){
      orm.updateOne("burgers", objectColumnVals, condition, function(result){
         callback(result);
      });
   }
};

// This will be exported to burgers_controller.js
module.exports = burger;