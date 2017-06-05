module.exports = function(app) {
  var express = require('express');
  var router = express.Router();
  var mysql = require('mysql');
  var dbconfig = require('../database.js');
  var conn = mysql.createConnection(dbconfig);

  router.get('/', function(req, res, next) {
    if (req.session.authId) {
      res.render('p_userHome', {
        user : req.session.authId,
        title: 'Home'
      });
    } else {
      res.render('p_home', {
        title: 'Home'
      });
    }
  });

  router.get('/join', function(req, res, next) {
    res.render('p_join', {
      title: 'Join'
    });
  });

  router.get('/login', function(req, res, next) {
    res.render('p_login', {
      title: 'Login'
    });
  });

  router.get('/logout', function(req, res, next) {
    delete req.session.authId;
    req.session.save(function() {
      res.redirect('/practice');
    });
  });

  router.get('/list', function(req, res, next) {
    var sql= 'SELECT name FROM user';
    conn.query(sql, function(err,rows,fields){
      res.render('list', {
        title: 'Login',
        user:  rows
      });
    });
  });

  router.post('/join', function(req, res, next) {
    user_name = req.body.id;
    password = req.body.password;

    var sql = "INSERT INTO `user` (`name`, `password`) VALUES (?, ?);";

    conn.query(sql, [user_name, password], function(error, results, fields) {
      if (error) {
        console.log(error);
      } else {
        console.log('results', results);
        console.log('fields', fields);
        req.session.authId = user_name;
        req.session.save(function() {
          console.log('가입 성공');
        });
      }
    });

    res.end('{"success" : "Updated Successfully", "status" : 200}');
  });

  router.post('/login', function(req, res, next) {
    user_name = req.body.id;
    user_password = req.body.password;

    var sql = "SELECT * FROM user WHERE name=?";

    conn.query(sql, [user_name], function(error, results, fields) {
      if (error) {
        console.log(error);
      } else {
        var user = results[0];
        if (user_password == user.password) {
          console.log('same password!')
          req.session.authId = user_name;
          req.session.save(function() {
            console.log('성공');
          });
        } else {
          console.log('실패');
        }
      }
    });
    res.end('{"success" : "Updated Successfully", "status" : 200}');
  });
  return router;
}
