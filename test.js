'use strict'

var express = require('express');
var user = require('./user');
var api = express.Router();

api.post('/test', user.home);

module.exports = api; 