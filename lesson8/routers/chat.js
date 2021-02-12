const express = require('express');
const controllers = require('../controllers')

const router = express.Router();

router.get('/', controllers.chat.getChat);
router.get('/:taskId', controllers.chat.getTaskChat);

module.exports = router;