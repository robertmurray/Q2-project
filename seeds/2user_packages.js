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
          user_id:1
        }
      ]);
    })
    .then(() => {
           return knex.raw("SELECT setval('user_packages_id_seq', (SELECT MAX(id) FROM user_packages))");
       });
};
