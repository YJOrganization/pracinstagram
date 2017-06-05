module.exports = function(app) {
  var express = require('express');
  var router = express.Router();
  var mysql = require('mysql');
  var dbconfig = require('../database.js');
  var conn = mysql.createConnection(dbconfig);



router.post('/', function(req, res, next) {

  user = req.body.id;
  password = req.body.password;
  useremail = req.body.useremail;
  username = req.body.username;
  var sql = "SELECT * FROM instagram_user WHERE name=?";

  conn.query(sql, [useremail], function(error, results, fields) {
    if (error) {
      console.log(error);
    } else {
      var user = results[0];
      if (password == user.password) {
        console.log('same password!')
        req.session.authId = useremail;
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
/* GET users listing. */
router.get('/', function(req, res, next) {
  if (req.session.authId) {
    res.redirect('/instagram');
  } else {
    res.redirect('/');
  }
});

router.get('/join', function(req, res, next) {
  res.render('join');
});

router.post('/join', function(req, res, next) {
  user = req.body.id;
  password = req.body.password;
  useremail = req.body.useremail;
  username = req.body.username;

  var sql = "INSERT INTO `user` (`useremail`,`username`,`user`, `password`) VALUES (?, ?);";

  conn.query(sql, [useremail,username,user, password], function(error, results, fields) {
    if (error) {
      console.log(error);
    } else {
      console.log('results', results);
      console.log('fields', fields);
      req.session.authId = user;
      req.session.save(function() {
        console.log('가입 성공');
      });
    }
  });
  });
return router;
}
