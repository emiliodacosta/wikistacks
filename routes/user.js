const express = require('express');
const app = express();


app.get('/', function (req, res, next){
  res.send('Made it to users page');
});

module.exports = app;
