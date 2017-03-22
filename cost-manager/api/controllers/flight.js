'use strict';
var util = require('util');
var knex = require(../../knex.js)


function GetAllFlight(){
  knex('flights')
    .select('*')
      .then((result) => {
        res.send(result);
      })
      .catch((err) =>{
        next();
      })
}

function GetFlight(){
  
}


module.exports = {
  GetAllFlight: GetAllFlight
  GetFlight: GetFlight
};
