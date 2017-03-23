'use strict';

process.env.NODE_ENV = 'test';

const assert = require('chai').assert;
const { suite, test } = require('mocha');
const bcrypt = require('bcrypt');
const request = require('supertest');
const knex = require('../../../knex');
const server = require('../../../app');

suite('users routes', () => {
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

  test('GET /users', (done) => {
    request(server)
      .get('/users')
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200,[
        {
          id: 1,
          username: 'kDaddy',
          first_name: 'Kevin',
          last_name: 'Zheng'
        },
        {
          id: 2,
          username: 'MoSho',
          first_name: 'Muhammad',
          last_name:  'Shoman'
        },
        {
          id: 3,
          username: 'Makavelli',
          first_name: 'Tupac',
          last_name:  'Shakur'
        },
        {
          id: 4,
          username: 'BigBoi',
          first_name: 'Big',
          last_name:  'Boy'
        },
        {
          id: 5,
          username: 'MartyTheeMartian',
          first_name: 'Marty',
          last_name:  'Yee'
        }
      ],done)
  });


  test('POST /users', (done) => {
    request(server)
      .post('/users')
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200,,done)
  });
});
