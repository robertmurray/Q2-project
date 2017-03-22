'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('restaurants').del()
    .then(function () {
      // Inserts seed entries
      return knex('restaurants').insert([
        {
          id: 1,
          restaurant_id: 1,
          package_id: 1
        }
      ]);
    });
};
