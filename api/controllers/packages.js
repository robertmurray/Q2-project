'use strict';
var util = require('util');
var knex = require('../../knex.js')

function GetAllPackagePerUser(req, res, err) {
    // console.log('did i get here?');
    return knex('users')
        .join('user_packages', 'users.id', 'user_packages.id')
        .join('flight_package', 'flight_package.package_id', 'user_packages.id')
        .join('flights', 'flights.id', 'flight_package.flight_id')
        .join('hotel_package', 'hotel_package.package_id', 'user_packages.id')
        .join('hotels', 'hotels.id', ' hotel_package.package_id')
        .join('restaurant_package', 'restaurant_package.package_id', 'user_packages.id')
        .join('restaurants', 'restaurants.id', 'restaurant_package.restaurant_id')
        .select('user_packages.id as package_id', 'users.id as user_id', 'airline', 'flights.id as flight_id', 'flights.cost as flight_cost', 'restaurants.name as restaurant_name', 'restaurants.id as restaurant_id',
            'restaurants.view_count as restaurants_review', 'hotels.name as hotels_name', 'hotels.id as hotels_id', 'hotels.cost as hotels_cost')
        .where('user_packages.id', req.swagger.params.id.value)
        .returning('*')
        .then((result) => {
            if (result) {
                console.log('what is result andy?', result);
                res.set('Content-Type', 'application/json');
                res.status(200).send(result);
            } else {
                res.status(404);
                res.send(" we can't find anything with this user's id");
            }
        })
        .catch((err) => {
            console.error(err);
        })
}

// function GetUniquePackageUniqueUser(req, res, err) {
//     console.log('am i here');
//     return knex('users')
//     .join('user_packages', 'users.id', 'user_packages.id')
//     .join('flight_package', 'flight_package.package_id', 'user_packages.id')
//     .join('flights', 'flights.id', 'flight_package.flight_id')
//     .join('hotel_package', 'hotel_package.package_id', 'user_packages.id')
//     .join('hotels', 'hotels.id', ' hotel_package.package_id')
//     .join('restaurant_package', 'restaurant_package.package_id', 'user_packages.id')
//     .join('restaurants', 'restaurants.id', 'restaurant_package.restaurant_id')
//     .select('user_packages.id as package_id', 'users.id as user_id', 'airline', 'flights.id as flight_id', 'flights.cost as flight_cost', 'restaurants.name as restaurant_name', 'restaurants.id as restaurant_id',
//         'restaurants.review as restaurants_review', 'hotels.name as hotels_name', 'hotels.id as hotels_id', 'hotels.cost as hotels_cost')
//     .where('user_packages.id', req.swagger.params.package_id.value)
//         .andWhere('user_id', req.swagger.params.user_id.value)
//         .then((result) => {
//             if (result) {
//                 console.log('what is result, kevin', result[0]);
//                 res.set('Content-Type', 'application/json');
//                 res.send(result[0]);
//             } else {
//                 res.status(404);
//                 res.send('make sure you remember your package id and user id.');
//             }
//         })
//         .catch((err) => {
//             console.error(err);
//         })
// }

function PostUniquePackagePerUser(req, res, err) {
  // console.log('am i here');
    return knex('user_packages')
        .insert({
            'id': req.body.id,
            'budget': req.body.budget,
            'user_id': req.body.user_id
        }).returning('*')
    .then((result)=>{
      console.log('what is result',result);
      return knex('flight_package')
          .insert({
              'flight_id': req.body.flight_id,
              'package_id': req.body.id,
          }).returning('*')
    })
    .then(() => {
      return knex('hotel_package')
          .insert({
              'hotel_id': req.body.hotel_id,
              'package_id': req.body.id
          }).returning('*')
    })
    .then(() => {
      return knex('restaurant_package')
          .insert({
              'restaurant_id': req.body.restaurant_id,
              'package_id': req.body.id
          }).returning('*')
    })
    .then(() => {
      knex('users')
          .join('user_packages', 'users.id', 'user_packages.id')
          .join('flight_package', 'flight_package.package_id', 'user_packages.id')
          .join('flights', 'flights.id', 'flight_package.flight_id')
          .join('hotel_package', 'hotel_package.package_id', 'user_packages.id')
          .join('hotels', 'hotels.id', ' hotel_package.package_id')
          .join('restaurant_package', 'restaurant_package.package_id', 'user_packages.id')
          .join('restaurants', 'restaurants.id', 'restaurant_package.restaurant_id')
          .select('user_packages.id as package_id', 'users.id as user_id', 'airline', 'flights.id as flight_id', 'flights.cost as flight_cost', 'restaurants.name as restaurant_name', 'restaurants.id as restaurant_id',
              'restaurants.view_count as restaurants_review', 'hotels.name as hotels_name', 'hotels.id as hotels_id', 'hotels.cost as hotels_cost')
          .where('user_packages.id', req.body.package_id)
          .returning('*')
          .then((result) => {
              if (result) {
                  console.log('what is result andy?', result);
                  res.set('Content-Type', 'application/json');
                  res.send(result);
              } else {
                  res.status(400);
                  res.send('this is not a valid input');
              }
          })
    })
    .catch((err) => {
        console.error(err)
    });
}



//
// function UpdateUniquePackageUniqueUser() {
//
// }
//
// function DeleteUniquePackageUniqueUser() {
//
// }
module.exports = {
    GetAllPackagePerUser: GetAllPackagePerUser,
    PostUniquePackagePerUser: PostUniquePackagePerUser,
    // GetUniquePackageUniqueUser: GetUniquePackageUniqueUser,
    // UpdateUniquePackageUniqueUser: UpdateUniquePackageUniqueUser,
    // DeleteUniquePackageUniqueUser: DeleteUniquePackageUniqueUser
}
