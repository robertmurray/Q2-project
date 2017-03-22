'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('hotels').del()
    .then(function () {
      // Inserts seed entries
      return knex('hotels').insert([
        {
          id: 1,
          name: 'Trump Tower',
          city_name: 'Miami',
          street_name: '38 Ivanka Ave',
          cost: 300.00,
          date: '2017/06/24'
        }
      ]);
    });
};
