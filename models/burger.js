var orm = require("../config/orm.js");

var burger = {

   orm1 :orm.selectAll,

   orm2: orm.insertOne,

   orm3: orm.updateOne
};

module.exports = burger;