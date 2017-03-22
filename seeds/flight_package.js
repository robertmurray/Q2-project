'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('flights').del()
    .then(function () {
      // Inserts seed entries
      return knex('flights').insert([
        {
          id: 1,
          flight_id: 1,
          package_id: 1
        }
      ]);
    });
};
