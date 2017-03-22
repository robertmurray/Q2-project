'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('restaurant_package').del()
    .then(function () {
      // Inserts seed entries
      return knex('restaurant_package').insert([
        {
          id: 1,
          restaurant_id: 1,
          package_id: 1
        }
      ]);
    })
    .then(() => {
           return knex.raw("SELECT setval('restaurant_package_id_seq', (SELECT MAX(id) FROM restaurant_package))");
       });
};
