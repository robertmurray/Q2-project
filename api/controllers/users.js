'use strict';
var util = require('util');
var knex = require('../../knex.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

function GetAllUsers(req, res) {
    return knex('users')
        .select('id', 'first_name', 'last_name', 'username')
        .then((users) => {
            res.send(users);
        })
        .catch((err) => {
            throw err;
        });
};

function AddUser(req, res) {
    const {
        first_name,
        last_name,
        username,
        password
    } = req.body;
    return knex('users')
        .where("username", username)
        .then((users) => {
            if (users[0]) {
                res.status(400).send("username already exists");
            }
            bcrypt.hash(password, 12)
                .then((hashed_password) => {

                    const user = {
                        first_name,
                        last_name,
                        username,
                        hashed_password
                    };

                    delete users.password;

                    return knex("users")
                        .insert(user, '*')
                }).then((users) => {
                    delete users[0].hashed_password;
                    res.send(users[0]);
                })
                .catch((err) => {
                    if (err) {
                        throw err;
                    }
                });

        })
}

function GetSpecificUser(req, res) {
    const userId = req.swagger.params.id.value;
    return knex('users')
        .where('id', userId)
        .then((user) => {
            delete user[0].hashed_password
            res.send(user[0]);
        })
        .catch((err) => {
            throw err;
        });
};

function UpdateUser(req, res) {
    const updatedUser = req.body;
    return bcrypt.hash(updatedUser.password, 12)
        .then((hashed_password) => {
            updatedUser.hashed_password = hashed_password;
            return knex('users')
                .where('id', req.swagger.params.id.value)
                .update({first_name: req.body.first_name,
                        last_name: req.body.last_name,
                        username: req.body.username
                      }, '*')
                .first()
                .then((updated) => {
                  console.log('what is update?', updated);
                    delete updated.hashed_password;
                    if (updated) {
                      console.log('what am i sending', updated);
                        res.send(updated);
                    }
                    else{
                      throw new Error('it is not here');
                    }
                })
                .catch((err) => {
                  res.status(404);
                  res.send({status: 404, ErrorMessage: 'Not Found.'});
                })
        })
        .catch((err) => {
          res.status(404);
          res.send({status: 404, ErrorMessage: 'Not Found.'});
        });
};

function DeleteUser(req, res) {
    const deleteUserId = req.swagger.params.id.value;
    let deletedUser;
    return knex('users')
        .where('id', deleteUserId)
        .then((user) => {
          if(!user){
            throw new Error('it is not here');
          }
            deletedUser = user[0];
            delete deletedUser.hashed_password;
            res.json(deletedUser);
        })
        .then(() => {
            return knex('users')
                .where('id', deleteUserId)
                .del()
        })
        .catch((err) => {
          res.status(404);
          res.send({status: 404, ErrorMessage: 'Not Found.'});
        })
};




module.exports = {
    GetAllUsers: GetAllUsers,
    AddUser: AddUser,
    GetSpecificUser: GetSpecificUser,
    UpdateUser: UpdateUser,
    DeleteUser: DeleteUser

};
