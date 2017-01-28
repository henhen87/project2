var express = require('express');

var router = express.Router();
var db = require('../models');

router.get('/', function(req, res){
	res.redirect('/ebert');
});

router.get('/ebert', function(req, res){
	res.render('home', null);
});

module.exports = router;