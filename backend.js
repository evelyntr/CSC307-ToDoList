const express = require("express");
const cors = require("cors");

const userServices = require("./models/user-services");

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("To Do List!");
});

app.get("/users", async (req, res) => {
  const name = req.query["name"];
  try {
    const result = await userServices.getUsers(name);
    res.send({ users_list: result });
  } catch (error) {
    console.log(error);
    res.status(500).send("An error ocurred in the server.");
  }
});

app.get("/users/:id", async (req, res) => {
  const id = req.params["id"];
  const result = await userServices.findUserById(id);
  if (result === undefined || result === null)
    res.status(404).send("Resource not found.");
  else {
    res.send({ users_list: result });
  }
});

app.post("/users", async (req, res) => {
  const user = req.body;
  const savedUser = await userServices.addUser(user);
  if (savedUser) res.status(201).send(savedUser);
  else res.status(500).end();
});

// app.get("/tasks", (req, res) => {
//   const priority = req.query.priority;
//   const completed = req.query.completed;

//   if (priority != undefined) {
//     let result = findTaskByPriority(priority);
//     result = { task_list: result };
//     res.send(result);
//   } else if (priority == undefined && completed != undefined) {
//     let result = findTaskByCompletion(completed);
//     result = { task_list: result };
//     res.send(result);
//   } else {
//     res.send(tasks);
//   }
// });

// app.get("/tasks/:id", (req, res) => {
//   /* get tasks by id */
//   const id = req.params["id"];
//   let result = findTaskById(id);
//   if (result === undefined || result.length == 0)
//     res.status(404).send("Resource not found.");
//   else {
//     result = { task_list: result };
//     res.send(result);
//   }
// });

/* get tasks by priority, by due date later */
/* first rest api #4 */

// app.post("/tasks", (req, res) => {
//   /* add task; works now */
//   const taskToAdd = req.body;
//   taskToAdd.id = randID();
//   addTask(taskToAdd);
//   res.status(201).send(taskToAdd);
// });

// app.delete("/tasks/:id", (req, res) => {
//   /* works to delete via id */
//   const id = req.params["id"];
//   let result = findTaskById(id);
//   if (result === undefined || result.length == 0)
//     res.status(404).send("Resource not found.");
//   else {
//     deleteTask(result);
//     res.status(204).end();
//   }
// });

// function deleteTask(task) {
//   const index = tasks["task_list"].indexOf(task);
//   tasks["task_list"].splice(index, 1); /* at position index remove 1 item */
// }

// function addTask(task) {
//   tasks["task_list"].push(task);
// }

// function findTaskById(id) {
//   return tasks["task_list"].find((task) => task["id"] === id);
// }

// const findTaskByPriority = (priority) => {
//   return tasks["task_list"].filter((task) => task["priority"] === priority);
// };

// const findTaskByCompletion = (completed) => {
//   return tasks["task_list"].filter((task) => task["completed"] === completed);
// };

app.listen(process.env.PORT || port, () => {
  console.log("REST API is listening");
});
