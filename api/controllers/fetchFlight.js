'use strict';
var util = require('util');
var knex = require('../../knex.js')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const header = require('module-header')
const request = require('request');

function fetchFlight(req, res){

request('http://partners.api.skyscanner.net/apiservices/browsequotes/v1.0/US/USD/en-US/SFO/LAX/2017-07-05/2017-07-05?apikey=prtl6749387986743898559646983194', function(error, response, body){
  console.log(response);
})



}


module.exports = {
  fetchFlight: fetchFlight
};
