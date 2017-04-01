'use strict';

process.env.NODE_ENV = 'test';

const { suite, test } = require('mocha');
const request = require('supertest');
const knex = require('../../../knex');
const server = require('../../../app');

suite('restaurant routes', () => {
  before((done) => {
    knex.migrate.latest()
      .then(() => {
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  beforeEach((done) => {
    knex.seed.run()
      .then(() => {
        done();
      })
      .catch((err) => {
        done(err);
      });
  });
  test('GET restaurant/', (done) => {
    request(server)
      .get('/restaurant')
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200,[
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
      ], done)
  });
  test('GET restaurant/:id', (done) => {
    request(server)
      .get('/restaurant/3')
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, {
        id: 3,
        name: 'Wingstop',
        street_name: '9356 Lexington Way',
        city_name: 'Atlanta',
        cost: 20.00
      }, done)
  });
});
