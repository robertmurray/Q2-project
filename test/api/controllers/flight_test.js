'use strict';

process.env.NODE_ENV = 'test';
// const { suite, test } = require('mocha');
const {describe,it} = require('mocha');
const request = require('supertest');
const knex = require('../../../knex.js');
const app = require('../../../app.js');
const expect = require('chai').expect;

describe('flight routes', () => {
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

  // afterEach((done) => {
  //   knex.migrate.rollback()
  //     .then(() => {
  //       done();
  //     })
  //     .catch((err) => {
  //       done(err);
  //     });
  // });
// describe('GET /flight with an array of flights', () =>{
//   it('response with an array of flights', (done)=>{
//     request(server)
//       .get('/flight')
//       .set('Accept', 'application/json')
//       .expect('Content-Type', /json/)
//       .expect(200)
//       .end((err, res) => {
//         if(err){
//           return done(err);
//         }
//         done();
//       })
//   });
// })
console.log('hi');
  it('GET /flight with an array of flights', (done) => {
    request(app)
      .get('/flight')
      .set('Accept', 'application/json')
      .expect('Content-Type','application/json')
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        console.log('what is fucking res.body?', res);
        expect(
        [{
        id: 1,
        airline: 'Delta',
        departure_city: 'San Francisco',
        destination_city: 'Miami',
        departure_date: '2017/06/24',
        arrival_date: '2017/06/24',
        cost: 300.00
      }] );
    },done);
  });
});
