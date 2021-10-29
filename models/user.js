const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  }
}, {collection : 'tasks_list'});

const Task = mongoose.model("Task", TaskSchema);

module.exports = Task;