'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('flights').del()
    .then(function () {
      // Inserts seed entries
      return knex('flights').insert([
        {
          id: 1,
          airline: 'Delta',
          departure_city: 'San Francisco',
          destination_city: 'Miami',
          departure_date: '2017/06/24',
          arrival_date: '2017/06/24',
          cost: 300.00
        }
      ]);

    })
    .then(() => {
           return knex.raw("SELECT setval('flights_id_seq', (SELECT MAX(id) FROM flights))");
       });

};
