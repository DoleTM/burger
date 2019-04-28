// Dependency
var orm = require("../config/orm.js");

var burger = {

   select: function(callback){
      orm.select("burgers", function (result) {
         callback(result);
      });
   },

   insert: function(value, callback){
      orm.insert("burgers", "burger_name", value, function(result) {
         callback(result);
      });
   },

   update: function(condition, callback){
      orm.update("burgers", "devoured", true, "id", condition, function(result) {
         callback(result);
      });
   }
};

// This will be exported to burgers_controller.js
module.exports = burger;