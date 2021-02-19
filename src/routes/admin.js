 // ************ Require's ************
 const express = require('express');
 const router = express.Router();

  // ************ Middlewares ************
 const adminMiddleware = require("../middlewares/adminMiddleware");

 
 // ************ Controller Require ************
 const adminController = require('../controllers/adminController');
 
 router.get('/', adminController.show);
 router.get('/login', adminController.welcome);
 router.post('/login',adminMiddleware, adminController.welcome);
 //router.get('/search', mainController.search); 
 
 module.exports = router;