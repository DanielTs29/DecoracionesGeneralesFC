var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/d', function(req, res) {
  res.render('servicios/decoraciones', { 
  	title: 'Express',
  	name: 'decoraciones',
  	miga: ['inicio', 'servicios', 'decoraciones']
  });
});

module.exports = router;
