'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('flight_package').del()
    .then(function () {
      // Inserts seed entries
      return knex('flight_package').insert([
        {
          id: 1,
          flight_id: 1,
          package_id: 1
        }
      ]);
    })then(() => {
            return knex.raw("SELECT setval('flight_package_id_seq', (SELECT MAX(id) FROM flight_package))");
        })
};
