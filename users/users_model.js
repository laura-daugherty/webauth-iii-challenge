const db = require('../database/db_config');

module.exports = {
  getUsers,
};


function getUsers() {
  return db('users as u')
  .innerJoin("departments as d", "d.id", "=", "u.department_id")
  .innerJoin("positions as p", "p.id", "=", "u.position_id")
  .select('d.department', 'p.position', 'u.username');
}


