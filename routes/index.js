var express = require('express');
var router = express.Router();


var mysql = require('mysql');
var conn = mysql.createConnection({
	host : 'localhost',
	user : 'root',
	password : 'qaplwsok01',
	database : 'instagram'
});
/* GET home page. */

router.get('/', function(req, res, next) {
  conn.connect();
  res.render('index');

  var sql = "SELECT * FROM user;";

  conn.query(sql, function (error, results, fields) {
    if (error) {
      console.log(error);
    }else{
      console.log('results' , results);
      console.log('fileds' , fields)
    }
  });
  conn.end();
});


module.exports = router;
