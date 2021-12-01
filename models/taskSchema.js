const mongoose = require("mongoose");


const TaskSchema = new mongoose.Schema(
  {
    taskName: {
      type: String,
      required: true,
      trim: true,
    },
    listName: {
      type: String,
      required: true,
      trim: true,
    },
    priority: {
      type: Number /* 1 - 10, higher number = higher priority */,
      required: true,
      trim: true,
    },
    dueDate: {
      type: Date,
      required: false /* optional */,
      trim: true,
    },
    completed: {  // add complete boolean attribute, need it set as false initially
      type: Boolean,
      required: true,
      trim: true,
      default: false,
    },
  },
  { collection: "taskList" }
);

const Task = mongoose.model("Task", TaskSchema);
module.exports = Task;
