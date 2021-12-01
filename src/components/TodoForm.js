import React, { useState } from "react";

function TodoForm({addTask}) {
    const [task, setTask] = useState({
        id: "",
        name: "",
        completed: false,
        priority: 0
    });

    function handleTaskInputChange(e) {
        setTask({ ...task, name: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (task.action.trim()) {
            const crypto = require("crypto");
            const id = crypto.randomBytes(16).toString("hex");
            addTask({ ...task, id: id });
            // reset task input 
            setTask({...task, name: ""});
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <input 
                align="center"
                placeholder="Add task"
                name="task"
                type="text"
                value={task.action}
                onChange={handleTaskInputChange}
                />
            <button size="lg" type="add">add</button>
        </form>
    )
}

export default TodoForm;