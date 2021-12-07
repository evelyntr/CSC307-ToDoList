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
module.exports = TaskSchema;
