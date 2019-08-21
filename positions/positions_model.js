const db = require('../database/db_config');

module.exports = {
  getPositions,
  add,
};

function getPositions() {
  return db('positions')
}

function add(newPosition) {
  return db("positions")
  .insert(newPosition, "id");
}