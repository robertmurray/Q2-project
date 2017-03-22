'use strict';
var util = require('util');
var knex = require('../../knex.js');


function GetAllUsers(req, res){
  return knex('users')
    .then((users) => {
      res.send(users)
    })
    .catch((err) => {
      throw err;
    });
};

function AddUser(){

}

function GetSpecificUser(){

}

function UpdateUser(){

}

function DeleteUser(){

}




module.exports = {
  GetAllUsers: GetAllUsers,
  AddUser: AddUser,
  GetSpecificUser: GetSpecificUser,
  UpdateUser: UpdateUser,
  DeleteUser: DeleteUser

};
