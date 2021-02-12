const express = require('express');
const controllers = require('../../controllers')

const router = express.Router();

router.post('/login/', controllers.api.auth.postLogin);
router.post('/signup/', controllers.api.auth.postSignup);

module.exports = router;