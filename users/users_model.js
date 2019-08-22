const db = require('../database/db_config');

module.exports = {
  getUsers,
  add,
  findBy
};


function getUsers() {
  return db('users as u')
  .innerJoin("departments as d", "d.id", "=", "u.department_id")
  .innerJoin("positions as p", "p.id", "=", "u.position_id")
  .select('d.department_name', 'p.position_name', 'u.username');
}

function add(newUser) {
  return db("users")
  .insert(newUser);
}

function findBy(filter) {
  return db("users")
  .where(filter)
}