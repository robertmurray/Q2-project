'use strict';
exports.seed = function(knex, Promise) {
  return knex('restaurants').del()
    .then(function () {
      return Promise.all([
       knex('restaurants').insert([
        {
          id: 1,
          name: 'OzaOza',
          street_name: '1700 Post St',
          city_name: 'San Francisco',
          review: 200
        },
        {
          id: 2,
          name: 'Red Lobster',
          street_name: '9356 Lexington Way',
          city_name: 'New York City',
          review: 200
        },
        {
          id: 3,
          name: 'Alba Ray’s',
          street_name: '2293 Mission St',
          city_name: 'San Francisco',
          review:200
        },
        {
          id: 4,
          name: 'Nopa',
          street_name: '560 Divisadero St',
          city_name: 'San Francisco',
          review: 200
        },
        {
          id: 5,
          name: 'Tacorea',
          street_name: '809 Bush St',
          city_name: 'San Francisco',
          review: 300
        }
      ])
    ])
    })
    .then(() => {
           return knex.raw("SELECT setval('restaurants_id_seq', (SELECT MAX(id) FROM restaurants))");
       });
};
