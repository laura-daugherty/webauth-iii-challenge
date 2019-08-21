
exports.seed = function(knex) {
  return knex('departments').insert([{
    "department_name": "Shoes",
    "department_details": "We sell shoes"
  },{
    "department_name": "Beauty",
    "department_details": "We sell beauty"
  }])
};
