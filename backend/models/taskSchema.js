const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    listName: {
      type: String,
      required: false /* change back to true later */,
      trim: true,
    },
    completed: {
      type: Boolean,
      required: true,
      trim: true,
      default: false /* default as false */,
    },
  },
  { collection: "task_list" }
);

const Task = mongoose.model("Task", TaskSchema);
module.exports = Task;
