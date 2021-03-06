import React from "react";
import Todo from "./Todo";

function TodoList({ tasks, toggleComplete, deleteTask }) {
  return (
    <ul>
      {tasks.map((task) => (
        <Todo
          key={task.id}
          task={task}
          toggleComplete={toggleComplete}
          deleteTask={deleteTask}
        ></Todo>
      ))}
    </ul>
  );
}

export default TodoList;
