const express = require('express');
const router = express.Router();
router.use(express.urlencoded());
const taskController = require('../controllers/create_task_controller');

router.post('/add', taskController.add);
module.exports = router;