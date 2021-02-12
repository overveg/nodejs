const express = require('express');
const controllers = require('../../controllers')

const router = express.Router();

router.get('/', controllers.api.auth.checkJWT, controllers.api.task.getTasks);
router.post('/', controllers.api.auth.checkJWT, controllers.api.task.createTask);
router.patch('/:taskId/description/', controllers.api.auth.checkJWT, controllers.api.task.updateTaskDescription);
router.patch('/:taskId/complete/', controllers.api.auth.checkJWT, controllers.api.task.completeTask);
router.delete('/:taskId/delete', controllers.api.auth.checkJWT, controllers.api.task.deleteTask);

module.exports = router;