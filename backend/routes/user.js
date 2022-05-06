// Importations
const express = require('express');

// Importation du middleware/password
const password = require('../middleware/password');


// Importation du controllers/user.js
const userCtrl = require('../controllers/user');
console.log('========CONTENU ROUTEuser'); //test
console.log(userCtrl); //test

// La fonction Router()
const router = express.Router();

// La route (endpoint) signup 
router.post('/signup',password, userCtrl.signup);

// La route (endpoint) login 
router.post('/login', userCtrl.login);

// Exportation du module
module.exports = router;


// console.log('========CONTENU ROUTER'); //test
// console.log(router); //test