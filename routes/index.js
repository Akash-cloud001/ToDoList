const express = require('express');

const router = express.Router();

const homeController = require('../controllers/home_controller');
console.log("router is loaded");

router.get('/',homeController.home);

//setting up the path for user through routes.js
//router.use('/routername', require('./routerFile));

router.use('/users', require('./users'));
router.use('/posts',require('./posts'));

//here module.exports is differnet working procedure
module.exports = router;
