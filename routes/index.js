var express = require('express');
var dailyApp = express.Router();

dailyApp.route('/')
  .get(function (req, res) {
    res.send('Hello World!');
  });

module.exports = dailyApp;
