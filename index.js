var express = require('express');
var app = express();
var dailyApp = require('./routes');

app.use(dailyApp);

app.listen(3000, function () {
  console.log('Daily app is listening on port 3000!');
});
