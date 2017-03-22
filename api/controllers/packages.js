'use strict';
var util = require('util');
var knex = require('../../knex.js')


function GetAllPackagePerUser(){
  return knex('user_packages')
    .select('*')
    .where('user_packages', req.swagger.params.id.value)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      next();
    })
}

function PostUniquePackagePerUser(){
  return knex('user_packages').
    insert({
      'budget': req.swagger.params.budget.value,
      'user_id': req.swagger.params.user_id.value
    })
    .returning('*')
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      next();
    });
}

function GetUniquePackageUniqueUser(){
  return knex('users')
    .innerJoin('user_package', 'users.id', 'user_package.id')
    .innerJoin('Reference_Table', 'package_id', 'user_package.id')
    .select('*')
    .where('user.id', req.swagger.params.user_id)
    .orWHhere('user_package.id', req.swagger.params.user_package.id)
    .returning('*')
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      next();
    })
}
function UpdateUniquePackageUniqueUser(){

}
function DeleteUniquePackageUniqueUser(){

}
module.exports = {
  GetAllPackagePerUser: GetAllPackagePerUser
  PostUniquePackagePerUser: PostUniquePackagePerUser
  GetUniquePackageUniqueUser: GetUniquePackageUniqueUser
  UpdateUniquePackageUniqueUser: UpdateUniquePackageUniqueUser
  DeleteUniquePackageUniqueUser: DeleteUniquePackageUniqueUser
}
