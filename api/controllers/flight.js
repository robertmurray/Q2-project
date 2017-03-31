'use strict';
var util = require('util');
var knex = require('../../knex.js')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
// const header = require('module-header')
const request = require('request');
const fetch = require('node-fetch');

function GetAllFlight(req, res) {
    // jwt.verify(req.headers['token'], process.env.JWT_KEY, (err, payload) => {
    //   if (err) {
    //       res.send(false);
    //   } else {
    //       tokenId = payload.userId;
    //       console.log(tokenId);
    //       res.send(true);
    //   }
    // });
  fetch("http://partners.api.skyscanner.net/apiservices/browseroutes/v1.0/US/USD/en-US/us/anywhere/anytime/anytime?apikey=" + process.env.FLIGHTAPI)
  .then((response) => {
      return response.json();
  })
  .then((realRes) => {
      let finalArray = [];
      realRes["Quotes"].forEach((ele) => {
          let result = {};
          let Airline = realRes["Carriers"].filter((flight) => {
              return flight.CarrierId === ele.OutboundLeg["CarrierIds"][0]
          })[0];

          if (Airline === undefined) {
              Airline = 'ID_Missing'
          }

          Airline = Airline['Name'];
          let departureLocation = realRes['Places'].filter((place) => {
              return place.PlaceId === ele['OutboundLeg']['OriginId']
          })[0];

          let departureCity = 'airport: ' + departureLocation.SkyscannerCode + ', City: ' + departureLocation.Name;

          let destinationLocation = realRes['Places'].filter((place) => {
              return place.PlaceId === ele['OutboundLeg']['DestinationId']
          })[0];

          let destinationCity = 'airport: ' +
              destinationLocation.SkyscannerCode + ', City: ' +
              destinationLocation.Name;
          let QuoteId = ele.QuoteId;
          result.id = parseInt(QuoteId);
          if (Airline === undefined) {
              Airline = 'ID_Missing'
          }
          result.airline = Airline;
          result.cost = parseInt(ele.MinPrice);
          result.destination_city = destinationCity;
          result.departure_city = departureCity;
          result.departure_date = ele.OutboundLeg.DepartureDate;
          result.arrival_date = ele.InboundLeg.DepartureDate;

          finalArray.push(result);
          console.log('what is result', result);
          // res.set('Content-Type', 'application/json')
        });
        let newArray = finalArray.filter((ele)=>{
          return (ele.departure_city.includes(req.query.departure_city)) && (ele.departure_date.includes(req.swagger.params.departure_date.value))
        })
        // knex('flight').insert([])
        console.log('am i here');
        console.log('what is newArray?', newArray);
        res.send(newArray);
  })
  .catch((err) => {
      console.error(err);
  })
}

function GetFlight(req, res) {
    return knex('flights')
        .where('id', req.swagger.params.id.value)
        .returning('*')
        .then((result) => {
            res.set('Content-Type', 'application/json')
            res.send(result[0])
        })
        .catch((err) => {
            next();
        });
}

module.exports = {
    GetAllFlight: GetAllFlight,
    GetFlight: GetFlight
};
