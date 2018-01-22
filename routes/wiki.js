const express = require('express');
const app = express();
const models = require('../models');
const Page = models.Page;
const User = models.User;

app.get('/', function (req, res, next){
  Page.findAll()
  .then(function (found){
    res.render('index', {pages: found});
  })
});

app.post('/', function(req, res, next) {
  // STUDENT ASSIGNMENT:
  // add definitions for `title` and `content`
  let page = Page.build({
    title: req.body.title,
    content: req.body.page_content
  });
  page.save()
  .then(function(found){
    res.redirect('/wiki/' + found.dataValues.urlTitle);
  });
  // -> after save -> res.redirect('/');
});

app.get('/add', function (req, res, next){
  res.render('addpage');
});

app.get('/:urlTitle', function (req, res, next){
  Page.findOne({
    where: {
      urlTitle: req.params.urlTitle
    }
  })
  .then(function(found){
    console.log(found.dataValues);
    res.render('wikipage', {title: found.dataValues.title, content: found.dataValues.content});
  })
  .catch(next);
});

module.exports = app;
