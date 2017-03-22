'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('hotels').del()
    .then(function () {
      // Inserts seed entries
      return knex('hotels').insert([
        {
          id: 1,
          hotel_id: 1,
          package_id: 1
        }
      ]);
    });
};
