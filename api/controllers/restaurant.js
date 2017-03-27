'use strict';
var util = require('util');
var knex = require('../../knex.js');
var Yelp = require('yelp');


function GetAllRestaurant(req, res){

  // Request API access: http://www.yelp.com/developers/getting_started/api_access
var yelp = new Yelp({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  token: process.env.TOKEN,
  token_secret: process.env.TOKEN_SECRET,
});

// See http://www.yelp.com/developers/documentation/v2/search_api
yelp.search({ term: 'food', location: req.query.departure_city, limit:20 , rating: req.query.rating})
.then(function (data) {
  let finalArray = [];
  data.businesses.forEach((ele) => {
  let result = {};
  result.id = 0;
  result.name = ele.name
  result.city_name = req.query.departure_city
  result.street_name = ele.location.cross_streets
  result.cost = 0;
  finalArray.push(result);
});
res.json(finalArray);
})
.catch(function (err) {
  console.error(err);
});
  // return knex('restaurants')
  //   .then((restaurants) => {
  //     res.status(200).json(restaurants);
  //   })
  //   .catch((err) => {
  //     throw err;
  //   });
};

function GetSpecificRestaurant(req, res){
  return knex('restaurants')
    .where('id', req.swagger.params.id.value)
    .select('*')
    .first()
    .then((restaurant) => {
      console.log(restaurant);
      res.send(restaurant);
    })
    .catch((err) => {
      throw err;
    });
};


module.exports = {
  GetAllRestaurant: GetAllRestaurant,
  GetSpecificRestaurant: GetSpecificRestaurant
};
