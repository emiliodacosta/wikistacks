const express = require('express');
const app = express();
const models = require('../models');
const Page = models.Page;
const User = models.User;

app.get('/', function (req, res, next){
  res.redirect('/');
});

app.post('/', function(req, res, next) {
  console.log(req.body);
  // STUDENT ASSIGNMENT:
  // add definitions for `title` and `content`

  let page = Page.build({
    title: req.body.title,
    content: req.body.page_content
  });

  // STUDENT ASSIGNMENT:
  // make sure we only redirect *after* our save is complete!
  // note: `.save` returns a promise or it can take a callback.
  page.save()
  .then(function(){
    res.redirect('/');
  });
  // -> after save -> res.redirect('/');
});

app.get('/add', function (req, res, next){
  res.render('addpage');
});

module.exports = app;
