const orm = require("../config/orm");



var burger = {
  getAll: function(callback) {
    orm.selectAll("burgers", function(result) {
      callback(result);
    });
  },
  // The variables cols and vals are arrays.
  create: function(newBurger, callback) {
    orm.insertOne("burgers", newBurger, function(result) {
      callback(result);
    });
  },
  update: function(updateObject, conditionObject, callback) {
    orm.updateOne("burgers", updateObject, conditionObject, function(result) {
      callback(result);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;
