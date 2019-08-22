exports.seed = function(knex) {
  return knex('positions').insert([{
    "position_name": "Sales",
    "position_details": "We sell"
  },{
    "position_name": "Stylist",
    "position_details": "We style"
  }])
};
