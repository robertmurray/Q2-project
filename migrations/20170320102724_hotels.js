
exports.up = function(knex, Promise) {
  return knex.schema.createTable('hotels', (table) => {
    table.increments();
    table.string('name');
    table.string('city_name');
    table.string('street_name');
    table.float('cost');
    table.date('date');
    table.integer('user_id')
            .references('id')
            .inTable('users')
            .notNullable()
            .onDelete('CASCADE')
            .index();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('hotels');
};
