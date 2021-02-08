// const express = require('express');
// const request = require('request');
// const app = express();

// app.set('view engine', 'pug');

// app.use(express.urlencoded({extended: true}));
// app.use(express.json());

// app.get('/form-with-post', function(request, response){
//    return response.render('form-with-post');
// });


// app.post('/submit-form-width-post');
// const Tasks = require('./models/tasks');

// get task list
Tasks.list();


// add task
Tasks.add({
    title: 'new task'
});


//edit task
Tasks.changeTitle({
    id: 6,
    title: 'the newest task'
});


//complete task
Tasks.complete({
    id: 8
});


//set priority 
Tasks.setPriority ({
    id: 8,
    priority: 1
});

//delete task
Tasks.delete ({
    id: 9
});
