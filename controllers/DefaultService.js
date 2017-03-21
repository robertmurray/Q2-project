'use strict';

exports.flightGET = function(args, res, next) {
  /**
   * get an array of flight info
   *
   * returns List
   **/
  var examples = {};
  examples['application/json'] = [ {
  "cost" : 123,
  "departure_date" : "aeiou",
  "id" : 123,
  "departure_city" : "aeiou",
  "airline" : "aeiou",
  "destination_city" : "aeiou",
  "arrival_date" : "aeiou"
} ];
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.flightIdGET = function(args, res, next) {
  /**
   * get the relevant flight info
   *
   * id Long id of the flight that we want to look up
   * returns GetFlightResponse
   **/
  var examples = {};
  examples['application/json'] = {
  "cost" : 123,
  "departure_date" : "aeiou",
  "id" : 123,
  "departure_city" : "aeiou",
  "airline" : "aeiou",
  "destination_city" : "aeiou",
  "arrival_date" : "aeiou"
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.hotelGET = function(args, res, next) {
  /**
   * get an array of hotel info
   *
   * returns List
   **/
  var examples = {};
  examples['application/json'] = [ {
  "city_name" : "aeiou",
  "cost" : 123,
  "name" : "aeiou",
  "id" : 123,
  "street_name" : "aeiou"
} ];
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.hotelIdGET = function(args, res, next) {
  /**
   * get the relevant hotel info
   *
   * id Long id of the flight that we want to look up
   * returns GetHotelResponse
   **/
  var examples = {};
  examples['application/json'] = {
  "city_name" : "aeiou",
  "cost" : 123,
  "name" : "aeiou",
  "id" : 123,
  "street_name" : "aeiou"
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.restaurantGET = function(args, res, next) {
  /**
   * get the restaurant info
   *
   * returns List
   **/
  var examples = {};
  examples['application/json'] = [ {
  "city_name" : "aeiou",
  "cost" : 123,
  "name" : "aeiou",
  "id" : 123,
  "street_name" : "aeiou"
} ];
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.restaurantIdGET = function(args, res, next) {
  /**
   * get the relevant flight info
   *
   * id Long id of the flight that we want to look up
   * returns GetRestaurantResponse
   **/
  var examples = {};
  examples['application/json'] = {
  "city_name" : "aeiou",
  "cost" : 123,
  "name" : "aeiou",
  "id" : 123,
  "street_name" : "aeiou"
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.usersGET = function(args, res, next) {
  /**
   * get users info
   *
   * returns GetUsersResponse
   **/
  var examples = {};
  examples['application/json'] = {
  "last_name" : "aeiou",
  "id" : 123,
  "first_name" : "aeiou",
  "username" : "aeiou"
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.usersIdDELETE = function(args, res, next) {
  /**
   * deleting a specific folder
   *
   * id Long The id that needs to be deleted
   * returns GetUsersResponse
   **/
  var examples = {};
  examples['application/json'] = {
  "last_name" : "aeiou",
  "id" : 123,
  "first_name" : "aeiou",
  "username" : "aeiou"
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.usersIdGET = function(args, res, next) {
  /**
   * return specific users
   *
   * id Long ID of the person to fetch
   * returns specificUser
   **/
  var examples = {};
  examples['application/json'] = {
  "last_name" : "aeiou",
  "id" : 123456789,
  "first_name" : "aeiou",
  "username" : "aeiou"
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.usersIdPUT = function(args, res, next) {
  /**
   * updating an new user
   *
   * id Long deleteing a object
   * jsonPatch UpdateUser
   * returns GetUsersResponse
   **/
  var examples = {};
  examples['application/json'] = {
  "last_name" : "aeiou",
  "id" : 123,
  "first_name" : "aeiou",
  "username" : "aeiou"
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.usersIdPackagesGET = function(args, res, next) {
  /**
   * getting all the packages from the user
   *
   * id Integer the id that needs to get back
   * returns GetAllPackages
   **/
  var examples = {};
  examples['application/json'] = {
  "Packages" : [ {
    "user_id" : "aeiou",
    "restaurant_id" : "aeiou",
    "hotel_id" : "aeiou",
    "id" : 123,
    "flight_id" : "aeiou",
    "budget" : "aeiou"
  } ]
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.usersIdPackagesPOST = function(args, res, next) {
  /**
   * adding new a package for the user
   *
   * id Integer adding an package info into the user_package table
   * body AddNewPackage adding an package to that user
   * returns GeneralPackage
   **/
  var examples = {};
  examples['application/json'] = {
  "user_id" : 123,
  "restaurant_id" : 123,
  "hotel_id" : 123,
  "id" : 123,
  "flight_id" : 123,
  "budget" : 123
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.usersPOST = function(args, res, next) {
  /**
   * add user info
   *
   * personName AddUser adding a user
   * returns PostUsersResponse
   **/
  var examples = {};
  examples['application/json'] = {
  "last_name" : "aeiou",
  "id" : 123,
  "first_name" : "aeiou",
  "username" : "aeiou"
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.usersUser_idPackagesPackage_idDELETE = function(args, res, next) {
  /**
   * deleting a package
   *
   * user_id Long loooking for specific user
   * package_id Long looking for specific package
   * returns GeneralPackage
   **/
  var examples = {};
  examples['application/json'] = {
  "user_id" : 123,
  "restaurant_id" : 123,
  "hotel_id" : 123,
  "id" : 123,
  "flight_id" : 123,
  "budget" : 123
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.usersUser_idPackagesPackage_idGET = function(args, res, next) {
  /**
   * getting a specific user package
   *
   * user_id Long loooking for specific user
   * package_id Long looking for specific package
   * returns GeneralPackage
   **/
  var examples = {};
  examples['application/json'] = {
  "user_id" : 123,
  "restaurant_id" : 123,
  "hotel_id" : 123,
  "id" : 123,
  "flight_id" : 123,
  "budget" : 123
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.usersUser_idPackagesPackage_idPUT = function(args, res, next) {
  /**
   * updating a new package
   *
   * user_id Long loooking for specific user
   * package_id Long looking for specific package
   * body UpdateNewPackage this is what user want to update
   * returns GeneralPackage
   **/
  var examples = {};
  examples['application/json'] = {
  "user_id" : 123,
  "restaurant_id" : 123,
  "hotel_id" : 123,
  "id" : 123,
  "flight_id" : 123,
  "budget" : 123
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}
