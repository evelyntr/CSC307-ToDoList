const express = require("express");
const cors = require("cors");

const taskServices = require("./models/taskServices");

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
  /* testing endpoints */
  res.send("TODOLIST");
});

app.get("/task", async (req, res) => {
  /* dump all tasks */
  const result = await taskServices.getTasks();
  res.send({ task_list: result });
});

app.get("/task/:id", async (req, res) => {
  /* get by task id */
  const id = req.params.id;
  try {
    const result = await taskServices.findTaskById(id);
    res.send({ task_list: result });
  } catch (error) {
    console.log(error);
    res.status(500).send("An error ocurred in the server.");
  }
});

app.get("/list/:listName", async (req, res) => {
  /* get by listName */
  const listName = req.params.listName;
  const result = await taskServices.sortList(listName);
  if (result === undefined || result === null)
    res.status(404).send("Resource not found.");
  else {
    res.send({ task_list: result });
  }
});

app.post("/task", async (req, res) => {
  const task = req.body;
  const savedTask = await taskServices.addTask(task);
  if (savedTask) res.status(201).send(savedTask);
  else res.status(500).end();
});

app.delete("/task/:id", async (req, res) => {
  /* works to delete via task's id */
  const id = req.params.id;
  const result = await taskServices.findTaskById(id);
  if (result === undefined || result.length == 0)
    res.status(404).send("Resource not found.");
  else {
    await taskServices.deleteTask(result);
    res.status(204).end();
  }
});

app.listen(process.env.PORT || port, () => {
  console.log("REST API is listening");
});
