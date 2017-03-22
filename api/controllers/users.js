'use strict';
const util = require('util');
const knex = require('../../knex.js');


function GetAllUsers(req, res, next){
  knex('users')
    .select('*')
    .then((users) => {
      res.send(users);
    })
    .catch((err) => {
      next(err);
    })
};
//
// function AddUser(){
//
// }
//
// function GetSpecificUser(){
//
// }
//
// function UpdateUser(){
//
// }
//
// function DeleteUser(){
//
// }



module.exports = {
  GetAllUsers
  // AddUser: AddUser
  // GetSpecificUser: GetSpecificUser
  // UpdateUser: UpdateUser
  // DeleteUser: DeleteUser

};
