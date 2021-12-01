import React from "react";

function Todo({ task, toggleComplete, deleteTask }) {
    function handleCheckbox() {
        toggleComplete(task.id);
    }

    function handleDelete() {
        deleteTask(task.id);
    }
    return (
        <div style={{ display: "flex"}}>
            <input type="checkbox" onClick={handleCheckbox}/>
            <li
                style={{
                    color: "black",
                    textDecoration: task.completed ? "line-through" : null
                }}
            >
                {task.action}
            </li>
            <button onClick={handleDelete}>delete</button>
        </div>
    )
}

export default Todo;