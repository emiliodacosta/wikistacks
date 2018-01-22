const express = require('express');
const app = express();
const wikiRouter = require('./wiki');
const userRouter = require('./user');


app.use('/wiki', wikiRouter);
app.use('/users', userRouter);

app.get('/', function (req, res, next){
  res.send('Homepage');
});

module.exports = app;
