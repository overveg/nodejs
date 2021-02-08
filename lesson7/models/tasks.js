const mysql2 = require('mysql2');
require('dotenv').config();

const options = {
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
};
const pool = mysql2.createPool(options).promise();

let Tasks = {
    list: function (callback) {
        pool.query('select * from todo', callback)
        .then(([data, fields]) => {
            console.log(data);
            console.log("Выведен список задач");
        })
        .catch((err) => {
            console.log(err);
        });
        // .finally(() => {
        //     pool.end();
        // })
    },
    add: function ( task, callback) {
        pool.query('INSERT todo (title, is_complete, priority) VALUES (?, 0, 0)', [ task.title ], callback)
        .then(([data, fields]) => {
            console.log(`Добавлена новая задача ${task.title}`);
        })
        .catch((err) => {
            console.log(err);
        })
        ;
        // .finally(() => {
        //     pool.end();
        // })
    },
    changeTitle: function (task, callback) {
        pool.query('UPDATE todo SET title = ? WHERE id = ?', [task.title, task.id], callback)
        .then(([data, fields]) => {
            console.log(`У задачи номер ${task.id} изменен текст на ${task.title}`);
        })
        .catch((err) => {
            console.log(err);
        })
        ;
        // .finally(() => {
        //     pool.end();
        // })
    },
    complete: function (task, callback) {
        pool.query('UPDATE todo SET is_complete = 1 WHERE id = ?', [task.id], callback)
        .then(([data, fields]) => {
            console.log(`Задача номер ${task.id} помечена выполненной`);

        })
        .catch((err) => {
            console.log(err);
        });
       
    },
    setPriority: function(task, callback){
        pool.query('UPDATE todo SET priority = ? WHERE id = ?', [task.priority, task.id], callback)
        .then(([data, fields]) => {
            console.log(`У задачи номер ${task.id} установлен приоритет ${task.priority}`);
        })
        .catch((err) => {
            console.log(err);
        })
       ;
    },
    delete: function (task, callback) {
        pool.query('DELETE FROM todo WHERE id = ?', [task.id], callback)
        .then(([data, fields]) => {
            //console.log(data);
            console.log(`Задача номер ${task.id} удалена`);
        })
        .catch((err) => {
            console.log(err);
        });
    }
};
module.exports = Tasks;

