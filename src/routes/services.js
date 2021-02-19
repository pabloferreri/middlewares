 // ************ Require's ************
 const express = require('express');
 const router = express.Router();
 
 // ************ Controller Require ************
 const servicesController = require('../controllers/servicesController');
 
 
 router.get('/', servicesController.show); 
 router.get('/design', servicesController.design); 
 //router.get('/search', mainController.search); 
 
 module.exports = router;