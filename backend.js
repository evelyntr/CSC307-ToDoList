const express = require('express');
const app = express();
const port = 5000;

const tasks = { /* change this later */
    task_list :
    [
       {
          id: '123456',
          priority: '5',
          completed: '0',
          note : 'finish sprint 1',
          due_date: '11/1/2021',
       },
       {
           id: '242424',
           priority: '1',
           completed: '0',
           note: 'drink',
           due_date: '10/31/2021'
       }
    ]
 }

app.use(express.json());

app.get('/', (req, res) => { /* test */
    res.send('To Do List!');
});

app.get('/tasks/:id', (req, res) => { /* get tasks by id */
    const id = req.params['id'];
    let result = findTaskById(id);
    if (result === undefined || result.length == 0)
        res.status(404).send('Resource not found.');
    else {
        result = {task_list: result};
        res.send(result);
    }
 });

/* get tasks by priority, by due date later */
/* first rest api #4 */

app.get('/tasks', (req, res) => {
    const priority = req.query.priority;
    if (priority != undefined){
        let result = findTaskByPriority(priority);
        result = {task_list: result};
        res.send(result);
    }
    else {
        res.send(tasks);
    }
});

app.post('/tasks', (req, res) => { /* add task; works now */
    const taskToAdd = req.body;
    taskToAdd.id = randID();
    addTask(taskToAdd);
    res.status(201).send(taskToAdd);
 });

app.delete('/tasks/:id', (req, res) => { /* works to delete via id */
    const id = req.params['id'];
    let result = findTaskById(id);
    if (result === undefined || result.length == 0)
        res.status(404).send('Resource not found.');
    else {
        deleteTask(result);
        res.status(204).end();
    }
});

function randID() {
    return Math.floor((Math.random() * 1000000) + 1);
}

function deleteTask(task) {
    const index = tasks['task_list'].indexOf(task);
    tasks['task_list'].splice(index, 1); /* at position index remove 1 item */
}

function addTask(task) {
    tasks['task_list'].push(task);
}

function findTaskById(id) {
    return tasks['task_list'].find((task) => task['id'] === id);
 }

 const findTaskByPriority = (priority) => {
     return tasks['task_list'].filter((task) => task['priority'] === priority);
 }

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});