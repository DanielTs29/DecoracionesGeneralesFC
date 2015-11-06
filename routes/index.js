var express = require('express');
var router = express.Router();

//Principal
router.get('/', function(req, res) {
  res.render('index', { title: 'Decoraciones Generales FC' });
});

/*
*
*		Servicios
*
*/

var dec = [
	{"titulo":"centros de mesas", 					"parrafo":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam doloribus dignissimos nisi qui deserunt", "imagen":"http://lorempixel.com/100/100"},
	{"titulo":"arreglos florales", 					"parrafo":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam doloribus dignissimos nisi qui deserunt", "imagen":"http://lorempixel.com/100/100"},
	{"titulo":"globoflexia", 								"parrafo":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam doloribus dignissimos nisi qui deserunt", "imagen":"http://lorempixel.com/100/100"},
	{"titulo":"topiarios", 									"parrafo":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam doloribus dignissimos nisi qui deserunt", "imagen":"http://lorempixel.com/100/100"},
	{"titulo":"recordatorios", 							"parrafo":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam doloribus dignissimos nisi qui deserunt", "imagen":"http://lorempixel.com/100/100"},
	{"titulo":"trabajos en hielo seco",			"parrafo":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam doloribus dignissimos nisi qui deserunt", "imagen":"http://lorempixel.com/100/100"},
	{"titulo":"manualidades", 							"parrafo":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam doloribus dignissimos nisi qui deserunt", "imagen":"http://lorempixel.com/100/100"},
	{"titulo":"adornos", 										"parrafo":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam doloribus dignissimos nisi qui deserunt", "imagen":"http://lorempixel.com/100/100"},
	{"titulo":"carros alegóricos",					"parrafo":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam doloribus dignissimos nisi qui deserunt", "imagen":"http://lorempixel.com/100/100"}
]

var evn = [
	{"titulo":"bodas", 											"parrafo":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam doloribus dignissimos nisi qui deserunt", "imagen":"http://lorempixel.com/100/100"},
	{"titulo":"quince años",								"parrafo":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam doloribus dignissimos nisi qui deserunt", "imagen":"http://lorempixel.com/100/100"},
	{"titulo":"baustizos", 									"parrafo":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam doloribus dignissimos nisi qui deserunt", "imagen":"http://lorempixel.com/100/100"},
	{"titulo":"primera comunión", 					"parrafo":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam doloribus dignissimos nisi qui deserunt", "imagen":"http://lorempixel.com/100/100"},
	{"titulo":"eventos corporativos", 			"parrafo":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam doloribus dignissimos nisi qui deserunt", "imagen":"http://lorempixel.com/100/100"},
	{"titulo":"seminarios", 								"parrafo":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam doloribus dignissimos nisi qui deserunt", "imagen":"http://lorempixel.com/100/100"},
	{"titulo":"fiestas de fin de año", 			"parrafo":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam doloribus dignissimos nisi qui deserunt", "imagen":"http://lorempixel.com/100/100"},
	{"titulo":"aniversarios", 							"parrafo":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam doloribus dignissimos nisi qui deserunt", "imagen":"http://lorempixel.com/100/100"},
	{"titulo":"alquiler de mesa y sillas", 	"parrafo":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam doloribus dignissimos nisi qui deserunt", "imagen":"http://lorempixel.com/100/100"},
	{"titulo":"alquiler de manteles ", 			"parrafo":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam doloribus dignissimos nisi qui deserunt", "imagen":"http://lorempixel.com/100/100"},
	{"titulo":"saloneros", 									"parrafo":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam doloribus dignissimos nisi qui deserunt", "imagen":"http://lorempixel.com/100/100"},
	{"titulo":"azafatas", 									"parrafo":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam doloribus dignissimos nisi qui deserunt", "imagen":"http://lorempixel.com/100/100"},
	{"titulo":"cartering", 									"parrafo":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam doloribus dignissimos nisi qui deserunt", "imagen":"http://lorempixel.com/100/100"}
]

var anm = [
	{"titulo":"show de payasos", 						"parrafo":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam doloribus dignissimos nisi qui deserunt", "imagen":"http://lorempixel.com/100/100"},
	{"titulo":"personajes", 								"parrafo":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam doloribus dignissimos nisi qui deserunt", "imagen":"http://lorempixel.com/100/100"},
	{"titulo":"pinta caritas", 							"parrafo":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam doloribus dignissimos nisi qui deserunt", "imagen":"http://lorempixel.com/100/100"},
	{"titulo":"moderadores", 								"parrafo":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam doloribus dignissimos nisi qui deserunt", "imagen":"http://lorempixel.com/100/100"},
	{"titulo":"show en general", 						"parrafo":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam doloribus dignissimos nisi qui deserunt", "imagen":"http://lorempixel.com/100/100"},
	{"titulo":"coreografía", 								"parrafo":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam doloribus dignissimos nisi qui deserunt", "imagen":"http://lorempixel.com/100/100"},
	{"titulo":"DJ", 												"parrafo":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam doloribus dignissimos nisi qui deserunt", "imagen":"http://lorempixel.com/100/100"},
	{"titulo":"Discoteca", 									"parrafo":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam doloribus dignissimos nisi qui deserunt", "imagen":"http://lorempixel.com/100/100"},
	{"titulo":"presentaciones folclóricas", "parrafo":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam doloribus dignissimos nisi qui deserunt", "imagen":"http://lorempixel.com/100/100"}
]

var dis = [
	{"titulo":"volantes", 									"parrafo":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam doloribus dignissimos nisi qui deserunt", "imagen":"http://lorempixel.com/100/100"},
	{"titulo":"afiches", 										"parrafo":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam doloribus dignissimos nisi qui deserunt", "imagen":"http://lorempixel.com/100/100"},
	{"titulo":"banners", 										"parrafo":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam doloribus dignissimos nisi qui deserunt", "imagen":"http://lorempixel.com/100/100"},
	{"titulo":"sellos de goma", 						"parrafo":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam doloribus dignissimos nisi qui deserunt", "imagen":"http://lorempixel.com/100/100"},
	{"titulo":"artes en general", 					"parrafo":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam doloribus dignissimos nisi qui deserunt", "imagen":"http://lorempixel.com/100/100"},
	{"titulo":"tarjetas de presentación", 	"parrafo":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam doloribus dignissimos nisi qui deserunt", "imagen":"http://lorempixel.com/100/100"},
	{"titulo":"tarjetas de cumpleaños", 		"parrafo":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam doloribus dignissimos nisi qui deserunt", "imagen":"http://lorempixel.com/100/100"},
	{"titulo":"diseño digital", 						"parrafo":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam doloribus dignissimos nisi qui deserunt", "imagen":"http://lorempixel.com/100/100"},
	{"titulo":"fotografía", 								"parrafo":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam doloribus dignissimos nisi qui deserunt", "imagen":"http://lorempixel.com/100/100"},
	{"titulo":"pintura", 										"parrafo":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam doloribus dignissimos nisi qui deserunt", "imagen":"http://lorempixel.com/100/100"}
]

//decoraciones
router.get('/decoraciones', function(req, res) {
  res.render('servicios', {
  	name: 'decoraciones',
  	miga: ['inicio', 'servicios', 'decoraciones'],
  	servicios: dec
  });
});

//eventos y fiestas
router.get('/eventosyfiestas', function(req, res) {
  res.render('servicios', {
  	name: 'eventos y fiestas',
  	miga: ['inicio', 'servicios', 'eventosyfiestas'],
  	servicios: evn
  });
});

//eventos y fiestas
router.get('/animaciones', function(req, res) {
  res.render('servicios', {
  	name: 'animaciones y presentaciones',
  	miga: ['inicio', 'servicios', 'animaciones'],
  	servicios: anm
  });
});

//eventos y fiestas
router.get('/disenografico', function(req, res) {
  res.render('servicios', {
  	name: 'diseño gráfico',
  	miga: ['inicio', 'servicios', 'disenografico'],
  	servicios: dis
  });
});

module.exports = router;
