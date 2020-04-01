"use strict";

exports.up = knex => {
  return knex.schema.createTable("ongs", table => {
    table.string("id").primary();
    table.string("name").notNullable();
    table.string("email").notNullable();
    table.string("phone").notNullable();
    table.string("city").notNullable();
    table.string("uf", 2).notNullable();
  });
};

exports.down = knex => {
  return knex.schema.dropTable("ongs");
};
