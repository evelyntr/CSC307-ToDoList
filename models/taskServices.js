const mongoose = require("mongoose");
const taskModel = require("./taskSchema");
const dotenv = require("dotenv");
dotenv.config();

mongoose /* change later to include user name & password */
  .connect(
    /* "mongodb+srv://dylanc3:dbmongo307@cluster307.zvkgk.mongodb.net/ToDoList", */
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

async function getTasks(name) {
  /* improve later */
  let result;
  if (name === undefined) {
    result = await taskModel.find();
  } else if (name) {
    result = await findTaskByName(name);
  }
  return result;
}

// working
async function findTaskById(id) {
  try {
    return await taskModel.findById(id);
  } catch (error) {
    console.log(error);
    return undefined;
  }
}

// working
async function addTask(task) {
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

async function findTaskByName(name) {
  return await taskModel.find({ name: name });
}

exports.getTasks = getTasks;
exports.findTaskById = findTaskById;
exports.addTask = addTask;
exports.deleteTask = deleteTask;
