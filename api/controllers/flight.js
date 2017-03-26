'use strict';
var util = require('util');
var knex = require('../../knex.js')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const header = require('module-header')
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

    fetch('http://partners.api.skyscanner.net/apiservices/browsequotes/v1.0/FR/eur/en-US/uk/us/anytime/anytime?apikey=ga559494378282545481811892645063')
        .then((response) => {
            return response.json();
        })
        .then((realRes) => {
            // result.id =
            // result.airline =
            // result.destination_city =
            // result.departure_city =
            // result.arrival_date =
            // result.departure_date =
            // console.log('what is body',res);
            // console.log('what is real res', realRes);
            let finalArray = [];
            // let result = {};
            realRes["Quotes"].forEach((ele) => {
                // console.log('what is ele', ele);
                let result = {};
                let Airline = realRes["Carriers"].filter((flight) => {
                    return flight.CarrierId === ele.OutboundLeg["CarrierIds"][0]
                })[0]['Name'];
                // console.log('what is Airline', Airline);
                // result.airline = Airline;
                // console.log('what is ass', Airline);
                result.airline = Airline;
                result.departure_date = ele.OutboundLeg.DepartureDate;
                result.arrival_date = ele.InboundLeg.DepartureDate;
                finalArray.push(result);
                // console.log('each time result', result);
                // console.log('each time final Array', finalArray);

            })
            console.log('WHAT IS RESULT', finalArray);
        })



        // id:
        // airline:
        // cost:
        // destination_city:
        // departure_city:
        // arrival_date:
        // departure_date:

        // return knex('flights')
        //   .select('*')
        //     .then((result) => {
        //         if(result){
        //           res.set('Content-Type', 'application/json')
        //           res.send(result);
        //         }
        //       else{
        //         res.status(400);
        //         res.send('this is not a valid input')
        //         throw new Error("this end point doesn't exist");
        //       }
        //     })
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
