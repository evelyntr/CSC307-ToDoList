const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema(
  {
    description: {
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
  },
  { collection: "taskList" }
);

const Task = mongoose.model("Task", TaskSchema);
module.exports = Task;
