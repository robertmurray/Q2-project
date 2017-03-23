'user strict'
process.env.NODE_ENV = 'test';
const {describe, it} = require('mocha');
const request = require('supertest');
const knex = require('../../../knex.js');
const app = require('../../../app.js');
const expect = require('chai').expect;

describe('package routes', () => {
  before((done) => {
    knex.migrate.rollback()
      .then(() => {
        done();
      })
      .catch((err) => {
        done(err);
      })
  }
  before((done) => {
    knex.migrate.latest()
      .then(() =>{
        done();
      })
      .catch((err) =>{
        done(err);
      })
  })
  beforeEach((done) => {
    knex.seed.run()
      .then(() => {
        done();
      })
      .catch((err) => {
        done(err);
      });
  })

  it('GET /users/{id}/package' , (done) => {
    request(app)
      .get('/users/3/packages')
      .set('Accept', 'application/json')
      .expect('Content-Type', /application\.json/)
      .expect(200)
      .end((err, res) => {
        if (err) return doen(err);
        expect((
          {
            id: 1,
            user_id: 1,
            airline: 'Delta',
            flight_Id: 2,
            flight_cost: 300,
            restaurant: 'Red Lobster',
            restaurant_cost: 50,
            hotel: 'Holiday Inn',
            hotel_Id: 2,
            hotel_cost: 150
          }
        ), done);
      })
  })
})
