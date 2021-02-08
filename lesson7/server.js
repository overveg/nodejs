const express = require('express');
const app = express();
app.use(express.static(__dirname+'/public'));
app.use(express.json());
const cors = require('cors');

const tasksApi = require('./models/TasksApi');
const auth = require('./controllers/Auth');

ShowTaskList = function(response)
{
    tasksApi.list(response);
}

app.use("/api/v1/", function(request, response){
    //auth.checkJWT(request, response, ShowTaskList);
    tasksApi.list(request, response);
});

app.listen(3000, () => {
    console.log('Server listening on 3000 port.');
});