'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user_packages').del()
    .then(function () {
      // Inserts seed entries
      return knex('user_packages').insert([
        {
          id: 1,
          budget: 700,
          flight_id: 1,
          restaurant_id:  1,
          hotel_id: 1,
          user_id:1
        }
      ]);
    });
};
