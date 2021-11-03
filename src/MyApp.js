import React, { useState } from 'react';
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Logo from "./MARX.png";

function MyApp() {
  const [tasks, setTasks] = useState([]);

  function addTask(task) {
    setTasks([task, ...tasks]);
  }

  function toggleComplete(id) {
    setTasks(
      tasks.map(task => {
        if (task.id === id) {
          return {
            ...task,
            completed: !task.completed
          };
        }
        return task;
      })
    )
  }

  function deleteTask(id) {
    setTasks(tasks.filter(task => task.id !== id));
  }
    return ( 
      <div className="App">
            <img src={Logo} alt="website logo" />
            <h1 align="center"><b>TO DO</b></h1>
            <TodoForm addTask={addTask}/>
            <TodoList 
              tasks={tasks} 
              toggleComplete={toggleComplete}
              deleteTask={deleteTask}/>
      </div> 
    ); 
}

export default MyApp;
