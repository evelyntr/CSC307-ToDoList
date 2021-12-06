import React, { useState } from "react";
import axios from "axios";

function TodoForm({ addTask }) {
  const [task, setTask] = useState({
    id: "",
    name: "",
    completed: false,
    priority: 0,
  });

  function handleTaskInputChange(e) {
    setTask({ ...task, name: e.target.value });
  }

  async function handleSubmit(e) {
    /* switched to async for await */
    e.preventDefault();
    if (task.name.trim()) {
      // const crypto = require("crypto");
      // const id = crypto.randomBytes(16).toString("hex");

      addTask({ ...task }); /* edited */

      /* attempt to link */
      try {
        const response = await axios.post("http://localhost:5000/task", task);
        console.log(response);
      } catch (error) {
        console.log(error);
      }

      // reset task input
      setTask({ ...task, name: "" });
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        align="center"
        placeholder="add task"
        name="task"
        type="text"
        value={task.name}
        onChange={handleTaskInputChange}
      />
      <button size="lg" type="add">
        +
      </button>
    </form>
  );
}

export default TodoForm;
