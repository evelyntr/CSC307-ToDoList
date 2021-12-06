const mongoose = require("mongoose");
const taskModel = require("./taskSchema");
const dotenv = require("dotenv");
dotenv.config();

mongoose /* change later to include user name & password */
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

async function getTasks(task_name, list_name) {
  /* tasks must always have BOTH task AND list name */
  let result;
  if (task_name === undefined && list_name === undefined) {
    result = await taskModel.find();
  } else {
    result = await findTaskByName(task_name, list_name);
  }
  return result;
}

async function findTaskById(id) {
  try {
    return await taskModel.findById(id); /* implement findById function */
  } catch (error) {
    console.log(error);
    return undefined;
  }
}

async function addTask(task) {
  /* should work fine */
  try {
    const taskToAdd = new taskModel(task);
    const savedTask = await taskToAdd.save();
    return savedTask;
  } catch (error) {
    console.log(error);
    return false;
  }
}

async function deleteTask(task) {
  try {
    return await taskModel.findOneAndDelete(task);
  } catch (error) {
    console.log(error);
    return false;
  }
}
// get specific list from listName
async function sortList(listName) {
  try {
    return await taskModel.find({ listName: listName });
  } catch (error) {
    console.log(error);
    return false;
  }
}

async function findTaskByName(task_name, list_name) {
  return await taskModel.find({ taskName: task_name, listName: list_name });
}

exports.getTasks = getTasks;
exports.findTaskByName = findTaskByName;
exports.findTaskById = findTaskById;
exports.addTask = addTask;
exports.deleteTask = deleteTask;
exports.sortList = sortList;
