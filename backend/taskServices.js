const mongoose = require("mongoose");
const taskModel = require("./taskSchema");
const dotenv = require("dotenv");
dotenv.config();

const Task = mongoose.model("Task", taskModel);

mongoose
  .connect(
    "mongodb+srv://" +
      process.env.MONGO_USER +
      ":" +
      process.env.MONGO_PWD +
      "@cluster307.zvkgk.mongodb.net/" +
      process.env.MONGO_DB +
      "?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .catch((error) => console.log(error));

let conn;

function connect(newc) {
    return (conn = newc);
  }

async function getTasks(task_name, list_name) {
  /* tasks must always have BOTH task AND list name */
  let result;
  if (task_name === undefined && list_name === undefined) {
    result = await Task.find();
  } else {
    result = await findTaskByName(task_name, list_name);
  }
  return result;
}

async function findTaskById(id) {
  try {
    return await Task.findById(id); /* implement findById function */
  } catch (error) {
    console.log(error);
    return undefined;
  }
}

async function addTask(task) {
  /* should work fine */
  try {
    const taskToAdd = new Task(task);
    const savedTask = await taskToAdd.save();
    return savedTask;
  } catch (error) {
    console.log(error);
    return false;
  }
}

async function deleteTask(task) {
  try {
    return await Task.findOneAndDelete(task);
  } catch (error) {
    console.log(error);
    return false;
  }
}
// get specific list from listName
async function sortList(listName) {
  try {
    return await Task.find({ listName: listName });
  } catch (error) {
    console.log(error);
    return false;
  }
}

async function findTaskByName(task_name, list_name) {
  return await Task.find({ taskName: task_name, listName: list_name });
}

exports.getTasks = getTasks;
exports.findTaskByName = findTaskByName;
exports.findTaskById = findTaskById;
exports.addTask = addTask;
exports.deleteTask = deleteTask;
exports.sortList = sortList;
exports.connect = connect;

