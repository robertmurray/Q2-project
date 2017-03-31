'use strict';
var util = require('util');
const knex = require('../../knex');
const bcrypt = require('bcrypt-as-promised');
const jwt = require('jsonwebtoken');
const express = require('express');
// const app = express();
// const cookieParser = require('cookie-parser');
// app.use(cookieParser())
const dotenv = require('dotenv');
dotenv.load()

function userLogin(req, res) {
    let authUser;
    return knex('users')
        .where('username', req.body.username)
        .first()
        .then((user) => {
            if (!user) {
                res.set("Content-Type", "text/plain");
                return res.status(400).send('Invalid username or password');
            } else {
                authUser = user;
                return bcrypt.compare(req.body.password, authUser.hashed_password)
            }
        })
        .then((match) => {
            if (match === false) {
                res.status(400).send('Invalid username or password');
                console.log('am i here');
            } else if (match === true) {
                const claim = {
                    userId: authUser.id
                };
                const token = jwt.sign(claim, process.env.JWT_KEY, {
                    expiresIn: '7 days'
                });

                let userInfo = {
                    id: authUser.id,
                    user_name: authUser.username,
                    first_name: authUser.first_name,
                    last_name: authUser.last_name,
                    token: token
                }
                res.status(200).json(userInfo);
            }
        })
        .catch((error) => {
         return res.status(400).json('Bad email or password');
        })
};

module.exports = {
    userLogin
}
