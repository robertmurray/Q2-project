'use strict';
exports.seed = function(knex, Promise) {
  return knex('user_packages').del()
    .then(function () {
      return Promise.all([
      return knex('user_packages').insert([
        {
          id: 1,
          budget: 700,
          user_id:1
        },
        {
          id: 2,
          budget: 1850,
          user_id:2
        },
        {
          id: 3,
          budget: 1500,
          user_id:2
        },
        {
          id: 4,
          budget: 1000,
          user_id:3
        },
        {
          id: 5,
          budget: 2000,
          user_id:  1
        }
      ]);
    ])
    })
    .then(() => {
           return knex.raw("SELECT setval('user_packages_id_seq', (SELECT MAX(id) FROM user_packages))");
       });
};
