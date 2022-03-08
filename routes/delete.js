const express = require('express');
const router = express.Router();
router.use(express.urlencoded());

const dltController = require('../controllers/delete_task_controller');
console.log("dlt router");
const User_info = require('../models/user');

router.get('/delete',dltController.delete);
module.exports = router;