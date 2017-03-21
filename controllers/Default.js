'use strict';

var url = require('url');

var Default = require('./DefaultService');

module.exports.flightGET = function flightGET (req, res, next) {
  Default.flightGET(req.swagger.params, res, next);
};

module.exports.flightIdGET = function flightIdGET (req, res, next) {
  Default.flightIdGET(req.swagger.params, res, next);
};

module.exports.hotelGET = function hotelGET (req, res, next) {
  Default.hotelGET(req.swagger.params, res, next);
};

module.exports.hotelIdGET = function hotelIdGET (req, res, next) {
  Default.hotelIdGET(req.swagger.params, res, next);
};

module.exports.restaurantGET = function restaurantGET (req, res, next) {
  Default.restaurantGET(req.swagger.params, res, next);
};

module.exports.restaurantIdGET = function restaurantIdGET (req, res, next) {
  Default.restaurantIdGET(req.swagger.params, res, next);
};

module.exports.usersGET = function usersGET (req, res, next) {
  Default.usersGET(req.swagger.params, res, next);
};

module.exports.usersIdDELETE = function usersIdDELETE (req, res, next) {
  Default.usersIdDELETE(req.swagger.params, res, next);
};

module.exports.usersIdGET = function usersIdGET (req, res, next) {
  Default.usersIdGET(req.swagger.params, res, next);
};

module.exports.usersIdPUT = function usersIdPUT (req, res, next) {
  Default.usersIdPUT(req.swagger.params, res, next);
};

module.exports.usersIdPackagesGET = function usersIdPackagesGET (req, res, next) {
  Default.usersIdPackagesGET(req.swagger.params, res, next);
};

module.exports.usersIdPackagesPOST = function usersIdPackagesPOST (req, res, next) {
  Default.usersIdPackagesPOST(req.swagger.params, res, next);
};

module.exports.usersPOST = function usersPOST (req, res, next) {
  Default.usersPOST(req.swagger.params, res, next);
};

module.exports.usersUser_idPackagesPackage_idDELETE = function usersUser_idPackagesPackage_idDELETE (req, res, next) {
  Default.usersUser_idPackagesPackage_idDELETE(req.swagger.params, res, next);
};

module.exports.usersUser_idPackagesPackage_idGET = function usersUser_idPackagesPackage_idGET (req, res, next) {
  Default.usersUser_idPackagesPackage_idGET(req.swagger.params, res, next);
};

module.exports.usersUser_idPackagesPackage_idPUT = function usersUser_idPackagesPackage_idPUT (req, res, next) {
  Default.usersUser_idPackagesPackage_idPUT(req.swagger.params, res, next);
};
