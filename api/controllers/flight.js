'use strict';
var util = require('util');
var knex = require('../../knex.js')


function GetAllFlight(){
  return knex('flights')
    .select('*')
      .then((result) => {
        console.log('what is result', result);
        res.send(result);
      })
      .catch((err) =>{
        next();
      })
}

function GetFlight(){
  return knex('flights')
    .where('id', req.swagger.params.id.value)
    .select('*')
      .first()
      .then((result) => {
        res.send(result)
      })
      .catch((err) =>{
        next();
      });
}


module.exports = {
  GetAllFlight: GetAllFlight,
  GetFlight: GetFlight
};
