'use strict';
var util = require('util');
var knex = require('../../knex.js')


function GetAllHotel(req, res){
  return knex('hotels')
    .then((hotels) => {
      res.send(hotels);
    })
    .catch((err) => {
      throw err;
    });
};

function GetSpecificHotel(req, res){
  return knex('hotels')
    .where('id', req.swagger.params.id.value)
    .select('*')
    .first()
    .then((hotel) => {
      res.send(hotel);
    })
    .catch((err) => {
      throw err;
    })
};


module.exports = {
  GetAllHotel: GetAllHotel,
  GetSpecificHotel: GetSpecificHotel
};
