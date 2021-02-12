const express = require('express');
const cors = require('cors');
const controllers = require('../../controllers')
const config = require('../../config')

const router = express.Router();

taskApiRouter = require('./task.js');
authApiRouter = require('./auth.js');

router.options('/v1/task', cors(config.cors.corsOptions));
router.use('/v1/task', cors(config.cors.corsOptions), taskApiRouter);
router.use('/v1/auth', cors(config.cors.corsOptions), authApiRouter);

module.exports = router;