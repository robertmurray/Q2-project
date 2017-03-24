'use strict';

const util = require('util');
const knex = require('../../knex');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt-as-promised');
const express = require('express');
const router = express.Router();


function userLogin(req, res) {
  
}

module.exports = {userLogin}
