'use strict';

const util = require('util');
const knex = require('../../knex');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const express = require('express');
const router = express.Router();
const dotenv = require('dotenv');

dotenv.load()

function userLogin(req, res) {
    let authUser;
    return knex('users')
        .where('username', req.body.username)
        .first()
        .then((user) => {
            console.log(user);
            if (!user) {
                res.status(400).send('Invalid username');
            }
            authUser = user;
            let hashed_pass = authUser.hashed_password;
            return bcrypt.compare(req.body.password, hashed_pass)
                .then((auth) => {
                    if (!auth) {
                        res.status(400).send('Invalid password');
                    }
                    const token = jwt.sign({
                            id: authUser.id,
                        },
                        process.env.JWT_KEY);
                    return res.status(200).json({
                        token
                    })
                })
                .catch((err) => {
                    res.status(400).json('bad username or password')
                })
        })
        .catch((err) => {
            res.status.json('bad username or password')
        });
};

module.exports = {userLogin}
