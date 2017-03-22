'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: 1,
          username: 'kDaddy',
          hashed_password: '$2a$12$ik/Gwny6vAtksQgJBWA9oOGpLcnsR4ynMRalO9ZS8OD7o.pfIUdcu', //kevinIsBoss
          first_name: 'Kevin',
          last_name: 'Zheng'
        }
      ]);
    });
};
