const db = require('../database/db_config');

module.exports = {
  getDepartments,
  add,
};

function getDepartments() {
  return db('departments')
}

function add(newRecipe) {
  return db("recipes")
  .insert(newRecipe, "id");
}