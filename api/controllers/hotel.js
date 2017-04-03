'use strict';
var util = require('util');
var knex = require('../../knex.js')
const request = require('request');
const fetch = require('node-fetch');
//MapQuest APIKEY=	p4a2P2xDL91lyyxP13GGAhpLhCwq7nZW
// http://partners.api.skyscanner.net/apiservices/hotels/liveprices/v2/{market}/{currency}/{locale}/{entityid}/{checkindate}/{checkoutdate}/{guests}/{rooms}?apiKey={apiKey}
// http://partners.api.skyscanner.net/apiservices/hotels/liveprices/v2/UK/EUR/en-GB/27539733/2017-12-04/2017-12-10/2/1?apiKey=prtl6749387986743898559646983194

// function convertCoordtoAddress(lat, long) {
//   return fetch(`http://www.mapquestapi.com/geocoding/v1/reverse?key=p4a2P2xDL91lyyxP13GGAhpLhCwq7nZW&location=${lat},${long}`)
//     .then((res) => {
//       return res.json();
//     })
//     .then((jayson) => {
//       let location = {};
//       // console.log('jayson.results[0].locations[0].street', jayson.results[0].locations[0].street);
//       location.street_name = jayson.results[0].locations[0].street;
//       location.city_name = jayson.results[0].locations[0].adminArea5;
//       return location
//     })
//     .catch((err) => {
//       throw err;
//     })
// }
//
// function GetAllHotel(req, res){
//   //grap entity id for given city http://partners.api.skyscanner.net/apiservices/hotels/autosuggest/v2/{market}/{currency}/{locale}/{query}?apikey={apikey}
//   let entityId;
//   fetch('http://partners.api.skyscanner.net/apiservices/hotels/autosuggest/v2/US/USD/en-US/NYC?apiKey=prtl6749387986743898559646983194')
//     .then((res) => {
//       return res.json();
//     })
//     .then((jayson) => {
//       return jayson.results[0].individual_id
//     })
//     .then((entityId) => {
//       console.log('entityId', entityId);
//       fetch(`http://partners.api.skyscanner.net/apiservices/hotels/liveprices/v2/US/USD/en-US/${entityId}/2017-12-04/2017-12-05/2/1?apiKey=prtl6749387986743898559646983194`)
//       .then((res) => {
//         return res.json()
//       })
//       .then((jayson) => {
//         console.log('jayson', jayson);
//         let finalObjs = [];
//         let hotelPrices = jayson.hotels_prices.map((hotel) => {
//           return hotel.agent_prices[0].price_total
//         });
//         console.log('hotelPrices', hotelPrices);
//         let hotelObjects = jayson.hotels.map((hotel, index) => {
//           let hotelObj = {};
//           hotelObj.name = hotel.name;
//           hotelObj.cost = hotelPrices[index];
//           return convertCoordtoAddress(hotel.latitude, hotel.longitude)
//             .then((location) => {
//               hotelObj.street_name = location.street_name;
//               hotelObj.city_name = location.city_name;
//               // console.log(hotelObj);
//               finalObjs.push(hotelObj);
//               console.log('finalObjs', finalObjs);
//               return hotelObj;
//             })
//           return hotelObj;
//         })
//         return Promise.all(hotelObjects)
//           .then((hotelsArr) => {
//             console.log('hotelsArr', hotelsArr);
//             res.send(hotelsArr)
//           })
//       })
//       .catch((err) => {
//         throw err;
//       })
//     })
//     .catch((err) => {
//       throw err
//     })
// };

function GetAllHotel(req, res) {
  return knex('hotels')
    .then((hotels) => {
      console.log(hotels);
      res.send(hotels);
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
      next();
    })
};


module.exports = {
  GetAllHotel: GetAllHotel,
  GetSpecificHotel: GetSpecificHotel
};
