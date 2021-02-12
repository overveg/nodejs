const models = require('../models');

exports.getChat = (req, res, next) => {
    if (!req.session.username) {
        res.redirect('/auth/login/')
    } else {
        res.render('chat', {});
    }
}
exports.getTaskChat = (req, res, next) => {

    if (!req.session.username) {
        res.redirect('/auth/login/')
    } else {
        models.Task.getTask(req.params.taskId).then(([task, fieldData]) => {

            if (task.length>0) {
                task = task[0];
                console.log(task);

                res.render('chat', { taskId: task.id, taskDesc:task.description });
  
            } else {
                    res.redirect('/chat');
            }
        
        })

    }

}
