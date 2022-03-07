const express = require('express');
const router = express.Router();

router.use(express.urlencoded());
const taskController = require('../controllers/create_task_controller');
const User_info = require('../models/user');

router.post('/add', taskController.add);
module.exports = router;