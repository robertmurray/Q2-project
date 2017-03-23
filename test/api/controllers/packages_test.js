'user strict'
process.env.NODE_ENV = 'test';
const {
    describe,
    it
} = require('mocha');
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
    })
    before((done) => {
        knex.migrate.latest()
            .then(() => {
                done();
            })
            .catch((err) => {
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

    it('GET /users/{id}/package', (done) => {
        request(app)
            .get('/users/3/packages')
            .set('Accept', 'application/json')
            .expect('Content-Type', /application\/json/)
            .expect(200)
            .expect([{
                package_id: 3,
                user_id: 3,
                airline: 'American Airlines',
                flight_id: 3,
                flight_cost: 500,
                restaurant_name: 'Wingstop',
                restaurants_name: 3,
                restaurants_cost: 20,
                hotels_name: 'Gucci Mane Hotel',
                hotels_id: 3,
                hotels_cost: 150
            }], done)
    })
})
