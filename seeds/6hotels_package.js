'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('hotels_package').del()
    .then(function () {
      // Inserts seed entries
      return knex('hotels_package').insert([
        {
          id: 1,
          hotel_id: 1,
          package_id: 1
        }
      ]);
    })
    .then(() => {
           return knex.raw("SELECT setval('hotels_package_id_seq', (SELECT MAX(id) FROM hotels_package))");
       });
};
