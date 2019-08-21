
exports.up = function(knex) {
  return knex.schema
  .createTable("departments", departments => {
    departments.increments(),
    departments
      .string("department_name", 128)
      .notNullable()
      .unique()
    departments
      .string("department_details", 4000)
  })

  .createTable("positions", positions => {
    positions.increments(),
    positions
      .string("position_name", 128)
      .notNullable()
      .unique()
    positions
      .string("position_details", 4000)
  })
  
  
  .createTable("users", users => {
    users.increments();
    users
      .string("username", 128)
      .notNullable()
      .unique();
    users.string("password", 128)
      .notNullable()
    users
      .integer("department_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("departments")
      .onDelete("RESTRICT")
      .onUpdate("CASCADE")
    users
      .integer("position_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("positions")
      .onDelete("RESTRICT")
      .onUpdate("CASCADE")
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("users")
  return knex.schema.dropTableIfExists("positions")
  return knex.schema.dropTableIfExists("departments")

};
