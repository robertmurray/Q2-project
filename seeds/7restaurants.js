'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('restaurants').del()
    .then(function () {
      // Inserts seed entries
      return knex('restaurants').insert([
        {
          id: 1,
          name: 'McDonalds',
          street_name: '3828 McDonald Way',
          city_name: 'Miami',
          cost: 5.00
        },
        {

        },
        {

        }
        ,
        {
          
        }
      ]);
    })
    .then(() => {
           return knex.raw("SELECT setval('restaurants_id_seq', (SELECT MAX(id) FROM restaurants))");
       });
};
